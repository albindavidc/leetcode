/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {

    function TrieNode() {
        this.children = {};
        this.count = 0;
    }

    let root = new TrieNode();

    function insert(word) {
        let node = root;

        for (let i = 0; i < word.length; i++) {
            let prefix = word[i];
            let suffix = word[word.length - i - 1];

            let key = prefix + suffix
            if (!node.children[key]) {
                node.children[key] = new TrieNode();
            }

            node = node.children[key]
        }
        node.count++
    }


    function search(word) {
        let node = root;
        let result = 0;

        for (let i = 0; i < word.length; i++) {
            let prefix = word[i];
            let suffix = word[word.length - 1 - i]

            let key = prefix + suffix;

            if (!node.children[key]) {
                break;
            }

            node = node.children[key];

            result += node.count;
        }
        return result
    }

    let final = 0;

    for (let word of words) {
        final += search(word);
        insert(word)
    }

    return final
};