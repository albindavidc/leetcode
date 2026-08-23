
function TrieNode() {
    this.children = {}
    this.isEnd = false;
}

var MagicDictionary = function () {
    this.root = new TrieNode();

};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {

    for (let i = 0; i < dictionary.length; i++) {
        let node = this.root;
        let word = dictionary[i]

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char]
        }

        node.isEnd = true;
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    function dfs(node, index, modified){
        if(index === searchWord.length){
            return modified && node.isEnd
        }

        let char = searchWord[index]

        for(let nextChar in node.children){
            let nextNode = node.children[nextChar];

            if(nextChar === char){
                if(dfs(nextNode, index+1, modified)){
                    return true;
                }
            }else if (!modified){
                if(dfs(nextNode, index+1, true)){
                    return true;
                }
            }

        }

        return false;
    }

    return dfs(this.root, 0, false)
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */