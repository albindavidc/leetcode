/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {

    function heapSort(arr) {

        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [arr[i], arr[0]] = [arr[0], arr[i]]

            heapify(arr, i, 0)
        }

        return arr;
    }

    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapify(arr, n, largest)
        }
    }

    let result = [];
    let merged = new Set();

    for (let i = 0; i < accounts.length; i++) {
        if (merged.has(i)) continue;

        let name = accounts[i][0];
        let emails = new Set(accounts[i].slice(1))
        merged.add(i);

        let changed = true;
        while (changed) {
            changed = false;

            for (let j = 0; j < accounts.length; j++) {
                if (merged.has(j)) continue

                let currEmails = accounts[j].slice(1);
                let hasCommonEmail = false;

                for (let k = 0; k < currEmails.length; k++) {
                    if (emails.has(currEmails[k])) {
                        hasCommonEmail = true;
                        break;
                    }
                }

                if (hasCommonEmail) {
                    merged.add(j)
                    changed = true;
                    for (let email of currEmails) {
                        if (!emails.has(email)) {
                            emails.add(email)
                        }
                    }
                }
            }
        }


        let sortedEmails = heapSort(Array.from(emails))

        result.push([name, ...sortedEmails])
    }

    return result
};