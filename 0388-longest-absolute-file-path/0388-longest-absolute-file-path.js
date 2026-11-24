/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    let stack = [0];
    let max = 0;

    let lines = input.split('\n');

    for (let i = 0; i < lines.length; i++) {
        let depth = lines[i].lastIndexOf('\t') + 1

        let name = lines[i].slice(depth);

        while (stack.length > depth + 1) {
            stack.pop()
        }

        let length = stack[stack.length - 1] + name.length + 1;
        stack.push(length);

        if (name.includes('.')) {
            max = Math.max(max, length - 1)
        }
    }


    return max;
};