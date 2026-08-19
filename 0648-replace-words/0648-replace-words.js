/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let splitting = sentence.split(' ');

    function TrieNode() {
        this.children = {};
        this.isEnd = false;
    }

    let root = new TrieNode()

    function create(word) {
        let node = root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char]
        }

        node.isEnd = true;
    }

    function searchPref(word) {
        let node = root;

        let newWord = []

        for (let char of word) {
            if (!node.children[char]) {
                return word;
            }

            newWord.push(char)
            node = node.children[char]

            if (node.isEnd) {
                return newWord.join('')
            }
        }
        
        return word

    }

    for (let char of dictionary) {
        create(char);
    }

    let result = []

    for (let word of splitting) {
        result.push(searchPref(word));

    }

    return result.join(' ')
};