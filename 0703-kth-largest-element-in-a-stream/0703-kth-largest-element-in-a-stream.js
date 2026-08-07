/**
 * @param {number} k
 * @param {number[]} nums
 */

class MyMinHeap {
    constructor(){
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index){
        return 2 * index + 1;
    }
    getRightChildIndex(index){
        return 2 * index + 2;
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }
    getLeftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }
    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length;
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    peek(){
        if(this.heap.length === 0) return;

        return this.heap[0]
    }

    push(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    
    pop(){
        if(this.heap.length ===0) return;
        if(this.heap.length === 1) return this.heap.pop()

        let removed = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        
        return removed;
    }

    heapifyUp(){
        let index = this.heap.length -1;

        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            let parent = this.getParentIndex(index);

            this.swap(parent,index);
            index = parent;
        }
    }

    heapifyDown(){
        let index = 0;

        while(this.hasLeftChild(index)){
            let smallest = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallest = this.getRightChildIndex(index);
            }

            if(this.heap[index] <= this.heap[smallest]){
                break;
            }

            this.swap(smallest, index);
            index = smallest
        }
    }
}



var KthLargest = function (k, nums) {
    this.k = k;

    this.heap = new MyMinHeap();

    for(let num of nums){
        this.heap.push(num);

        if(this.heap.heap.length > this.k){
            this.heap.pop();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {

    this.heap.push(val);

    if(this.heap.heap.length > this.k){
        this.heap.pop()
    }

    return this.heap.peek()
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */