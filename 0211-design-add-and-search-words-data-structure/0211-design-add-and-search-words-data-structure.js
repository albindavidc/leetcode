class Trie{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}


var WordDictionary = function () {
    this.root = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let item = this.root;

    for (let char of word) {
        if (!item.children[char]) item.children[char] = new Trie()

        item = item.children[char]
    }

    item.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    
    let dfs = (index, node) => {
        for(let i = index; i<word.length; i++){
            let char = word[i];

            if(char === '.'){
                for(let key in node.children){
                    if(dfs(i+1, node.children[key])){
                        return true;
                    }
                }
                return false;
            }else{
                if(!node.children[char]) return false;

                node = node.children[char];
            }
        }

        return node.isEnd
    }

    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */