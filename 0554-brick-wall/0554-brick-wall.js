/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let map = new Map();


    for (let i = 0; i < wall.length; i++) {
        let sum = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j]

            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1)
            } else {
                map.set(sum, 1)
            }
        }
    }

    let max = 0;
    for (let [key, value] of map) {
        if (value > max) {
            max = value;
        }
    }

    return wall.length - max
};