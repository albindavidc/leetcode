/**
 * @param {string} s
 * @return {number}
 */
//pemdas
var calculate = function (s) {

    let result = 0;
    let sign = 1;
    let curr = 0;
    let stack = [];

    for (let num of s) {
        if (num >= '0' && num <= '9') {
            curr = curr * 10 + Number(num);
            continue
        }
        switch (num) {
            case '(': {
                result += sign * curr
                curr = 0

                stack.push(result)
                stack.push(sign)

                result = 0;
                sign = 1
                break;
            }
            case '-': {
                result += sign * curr
                sign = -1
                curr = 0
                break;
            }
            case '+': {
                result += sign * curr
                sign = +1
                curr = 0
                break;
            }
            case ')': {
                result +=  sign * curr
                curr = 0;

                result *= stack.pop()
                result += stack.pop()
                break;
            }
            case ' ': {
                break;
            }
        }
    }

    return result + sign * curr
};