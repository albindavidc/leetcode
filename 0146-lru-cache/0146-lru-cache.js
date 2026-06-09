/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.save = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.save.has(key)) return -1;
    
    let val = this.save.get(key);
    this.save.delete(key);
    this.save.set(key,val);

    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.save.has(key)){
        this.save.delete(key);
    }

    this.save.set(key, value);

    if(this.capacity < this.save.size){
        let lru = this.save.keys().next().value
        this.save.delete(lru)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */