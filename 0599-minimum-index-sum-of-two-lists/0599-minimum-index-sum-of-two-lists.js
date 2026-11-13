/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let mapList1 = new Map();

    for (let i = 0; i < list1.length; i++) {
        mapList1.set(list1[i], i)

    }

    let result = [];
    let minIndexStr = Infinity;
    for (let i = 0; i < list2.length; i++) {
        let str = list2[i]

        if (mapList1.has(str)) {
            let min = mapList1.get(str) + i;

            if (min < minIndexStr) {
                minIndexStr = min;
                result = [str]
            } else if (minIndexStr === min) {
                result.push(str)
            }
        }
    }

    return result
};