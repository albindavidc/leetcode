/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result = [];

    for(let i = 0; i<image.length; i++){
        let temp = [];
        for(let j = image[i].length-1; j>=0; j--){
            if(image[i][j] === 1){
                temp.push(0)
            }else{
                temp.push(1)
            }
        }
        result.push(temp)
    }

    return result
};