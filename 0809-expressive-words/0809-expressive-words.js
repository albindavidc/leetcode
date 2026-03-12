/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    
    function check(word){
        let i = 0; 
        let j = 0;

        while (i < s.length && j < word.length){
            
            if(s[i] !== word[j]) return false;

            let char = s[i];
            let countS = 0;
            let countW = 0;

            while (s[i] === char){
                countS++
                i++
            }

            while(word[j] === char){
                countW++;
                j++;
            }

            if(countW > countS) return false;
            if(countW !== countS && countS < 3) return false;
        }

        return i === s.length && j === word.length
    }


    let count = 0;

    for(let i = 0; i<words.length; i++){
        if(check(words[i])) count++
    }

    return count
};