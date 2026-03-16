/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {

    function backtrack(expr) {
        let result = [];

        for (let i = 0; i < expr.length; i++) {
            let char = expr[i];

            if (char === '+' || char === "-" || char === '*') {

                let left = backtrack(expr.slice(0, i));
                let right = backtrack(expr.slice(i + 1));

                for (let l of left) {
                    for (let r of right) {
                        if (char === '+') result.push(l + r);
                        if (char === '-') result.push(l - r);
                        if (char === '*') result.push(l * r);
                    }
                }
            }

        }
        if (result.length === 0) {
            result.push(Number(expr))
        }

        return result;
    }

    return backtrack(expression)
};