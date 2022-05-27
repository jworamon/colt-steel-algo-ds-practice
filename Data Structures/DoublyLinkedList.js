class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return;
        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        const mid = Math.floor(this.length / 2);
        let currentNode, currentIdx;
        if (idx < mid) {
            currentNode = this.head;
            currentIdx = 0;
            while (currentIdx !== idx) {
                currentNode = currentNode.next;
                currentIdx++;
            }
        } else {
            currentNode = this.tail;
            currentIdx = this.length - 1;
            while (currentIdx !== idx) {
                currentNode = currentNode.prev;
                currentIdx--;
            }
        }
        return currentNode;
    }
    set(idx, val) {
        const foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length - 1) return !!this.push(val);
        const newNode = new Node(val);
        const prevNode = this.get(idx - 1);
        const nextNode = prevNode.next;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = prevNode.next = newNode;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        const removedNode = this.get(idx);
        const prevNode = removedNode.prev;
        const nextNode = removedNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.prev = removedNode.next = null;
        this.length--;
        return removedNode;
    }
}