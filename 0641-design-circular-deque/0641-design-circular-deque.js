/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.items = new Array(k);
    this.capacity = k;
    this.length = 0;
    this.front = -1;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) return false;
    this.front = (this.front -1 + this.capacity) % this.capacity;
    this.items[this.front] = value;
    this.length += 1;
    if (this.rear === -1) this.rear = this.front
    return true;
}

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) return false;
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    this.length += 1;
    if (this.front === -1) this.front = this.rear;

    return true;

};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) return false;

    let items = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.length -= 1;

    if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
    }

    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) return false;

    let items = this.items[this.rear];
    this.items[this.rear] = null;
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.length -= 1;

    if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
    }

    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if(this.isEmpty()) return -1;
    return this.items[this.front]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if(this.isEmpty()) return -1
    return this.items[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.length === this.capacity
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */