/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let result = [area, 1];

    for (let width = 1; width <= area; width++) {
        if (area % width === 0) {
            let length = area / width;

            if(length >= width && (result[0] - result[1]) > (length - width)){
                result = [length, width]
            }
        }
    }

    return result
};