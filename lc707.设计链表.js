
var MyLinkedList = function() {
    this.node = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.node
    for (let i = 0; i <= index; i++){
        if(curr.next === null && i !== index){
            return -1
        }
        if(i === index - 1){
            return curr.next.val
        }
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let prev = this.node
    this.node = {
        val,
        next:prev
    }
    console.log("ADD HEAD:",val , this.node);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.node
    while(curr.next !== null){
        curr = curr.next
    }
    curr.next = {
        val,
        next:null
    }
    console.log("ADD TAIL",val,this.node);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let curr = this.node
    for (let i = 0; i <= index; i++){
        if(curr.next === null){
            curr.next = {
                val,
                next:null
            }
            return
        }
        if(i === index - 1){
            curr.next = {
                val,
                next:curr.next
            }
        }
    }
    console.log(this.node);

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.node
    for (let i = 0; i <= index; i++){
        if(curr.next === null && i !== index){
            return
        }
        if(i === index - 1){
            curr.next = curr.next.next
        }
    }
    console.log(this.node);
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */