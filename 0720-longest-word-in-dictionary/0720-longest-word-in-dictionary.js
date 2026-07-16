/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {

    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            let swap = false;

            if(words[i].length > words[j].length){
                swap = true;
            }
            else if(words[i].length === words[j].length){
                if(words[i] > words[j]){
                    swap = true;
                }
            }

            if (swap) {
                [words[i], words[j]] = [words[j], words[i]]
            }
        }
    }

    let result = '';
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]

        if(currentWord.length <= result.length) continue;

        let isValid = true;
        for(let len = 1; len<currentWord.length; len++){
            let prefix = '';

            for(let k = 0; k< len; k++){
                prefix += currentWord[k]
            }

            let prefixFound = false;
            for(let j = 0; j<words.length; j++){
                if(words[j] === prefix){
                    prefixFound = true;
                    break;
                }
            }

            if(!prefixFound){
                isValid = false;
                break;
            }
        }
        
        if(isValid){
            result = currentWord
        }
    }


    return result
};