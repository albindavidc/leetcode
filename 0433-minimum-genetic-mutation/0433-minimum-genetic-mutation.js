/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
    if (startGene === endGene) return 0;

    let newBank = new Set(bank);
    let visited = new Set([startGene]);
    let queue = [startGene];

    let result = 0;
    let gene = ['A', 'C', 'G', 'T'];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            if (curr === endGene) return result;

            for (let j = 0; j < curr.length; j++) {
                for (let char of gene) {
                    if (curr[j] === char) continue;

                    let next = curr.slice(0, j) + char + curr.slice(j + 1);

                    if (newBank.has(next) && !visited.has(next)) {
                        visited.add(next);
                        queue.push(next)
                    }

                }

            }

        }
        result++
    }

    return -1
};