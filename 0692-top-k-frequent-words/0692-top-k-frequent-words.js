/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {

    let mapping = new Map();

    for (let str of words) {
        mapping.set(str, (mapping.get(str) || 0) + 1)
    }

    let uniqueWords = [...mapping.keys()]

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length - 1 - i; j++) {
            let word1 = uniqueWords[j]
            let word2 = uniqueWords[j + 1]

            if (mapping.get(word1) < mapping.get(word2) || (
                mapping.get(word1) === mapping.get(word2) && word1 > word2
            )) {
                [uniqueWords[j], uniqueWords[j + 1]] = [uniqueWords[j + 1], uniqueWords[j]]
            }
        }
    }



    return uniqueWords.slice(0, k)
};