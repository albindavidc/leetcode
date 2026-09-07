/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {

    const aliceFinal = aliceSizes.reduce((acc, curr) => acc + curr, 0)
    const bobFinal = bobSizes.reduce((acc, curr) => acc + curr, 0);
    const diff = (aliceFinal - bobFinal) / 2;

    bobSizes.sort((a,b) => a-b)

    function binarySearch(target) {
        let left = 0;
        let right = bobSizes.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (bobSizes[mid] === target) {
                return true
            };

            if (target < bobSizes[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }

        return false;
    }

    for (let aliceCandy of aliceSizes) {

        const bobCandy = aliceCandy - diff

        if (binarySearch(bobCandy)) {
            return [aliceCandy, bobCandy]
        }
    }
};