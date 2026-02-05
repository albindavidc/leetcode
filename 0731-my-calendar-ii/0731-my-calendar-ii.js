
var MyCalendarTwo = function () {
    this.overLaps = [];
    this.booked = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (startTime, endTime) {

    for (let [s, e] of this.overLaps) {
        if (Math.max(startTime, s) < Math.min(endTime, e)) {
            return false;
        }
    }

    for (let [s, e] of this.booked) {
        if (Math.max(startTime, s) < Math.min(endTime, e)) {
            this.overLaps.push([Math.max(startTime, s), Math.min(endTime, e)])
        }
    }

    this.booked.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */