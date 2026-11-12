    let map = new Map();
    let id = 0;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    
    let result = `https://leetcode.com/${id++}`

    map.set(result , longUrl)

    return result
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */