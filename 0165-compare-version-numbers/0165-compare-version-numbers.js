/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {


    let v1Split = version1.split('.');
    let v2Split = version2.split('.');

    let max = Math.max(v1Split.length, v2Split.length);

    for(let i = 0; i<max; i++){
        let num1 = Number(v1Split[i] || 0);
        let num2 = Number(v2Split[i] || 0);

        if(num1 < num2) return -1;
        if(num1 > num2) return 1
    }

    return 0;
};