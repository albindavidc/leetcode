/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let ptrA = 0;
    let ptrB = 0;

    while (ptrB < typed.length) {
        if (ptrA < name.length && name[ptrA] === typed[ptrB]) {
            ptrA++;
        }
        else if (typed[ptrB] !== typed[ptrB - 1]) {
            return false;
        }

        ptrB++
    }

    return ptrA === name.length;
};