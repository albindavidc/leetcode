/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {

    function TrieNode() {
        this.children = {};
        this.isEnd = false;
    };

    let root = new TrieNode();

    function insert(words) {
        let node = root;

        words = words.split('/').slice(1)

        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            if (!node.children[word]) {
                node.children[word] = new TrieNode();
            }

            node = node.children[word]
        }

        node.isEnd = true;
    }

    function search(words) {
        let node = root;

        words = words.split('/').slice(1);

        for (let char of words) {
            if (!node.children[char]) {
                return false;
            }

            node = node.children[char]

            if (node.isEnd) {
                return true;
            }

        }

        return false;
    }

    let result = []

    folder = folder.sort((a, b) => a.length - b.length)

    for (let subFolder of folder) {
        if (!search(subFolder)) {
            result.push(subFolder)
            insert(subFolder)
        }
    }

    return result
};