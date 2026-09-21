/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const n = dominoes.length;
    let forces = Array(n).fill(0);


    let force = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === 'R') {
            force = n;
        } else if (dominoes[i] === 'L') {
            force = 0;
        } else if (force > 0) {
            force--
        }

        forces[i] += force
    }

    force = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === 'L') {
            force = n;
        } else if (dominoes[i] === 'R') {
            force = 0
        } else if (force > 0) {
            force--;
        }

        forces[i] -= force
    }

    return dominoes.split('').map((_, i) => {
        if (forces[i] > 0) return 'R';
        if (forces[i] < 0) return 'L';
        return '.'
    }).join('')
};