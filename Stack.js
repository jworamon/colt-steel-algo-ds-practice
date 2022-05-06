class Node {
    constructor(val) {
        this.val = val;
        this.next = 0;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // use unshift implementation to maintian O(1) but call it push :)
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this.size;
    }
    // use shift implementation to maintain O(1) but call it pop :)
    pop() {
        if (!this.first) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
    }
}