/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let m = [1,2,4,8,16,32];
    let h = [1,2,4,8];

    let result = [];

    function backtrack(index, hour, minute, leds){

        if(hour >= 12 || minute >= 60) return;

        if(leds === turnedOn){
            let min = minute < 10 ? "0" + minute : minute;
            result.push(`${hour}:${min}`)
        }

        for(let i = index ; i<10; i++){

            if(i < 4){
                backtrack(i+1, hour + h[i], minute, leds+1)
            }else{
                backtrack(i+1, hour, minute + m[i-4], leds+1)
            }
        }
    }

    backtrack(0,0,0,0)

    return result
};