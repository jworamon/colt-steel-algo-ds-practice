class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {   //list is empty
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return // list is empty return undefined
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let currentNode = this.head;
        let currentIdx = 0;
        while (currentIdx !== idx) {
            currentNode = currentNode.next;
            currentIdx++;
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
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prevNode = this.get(idx - 1);
        const temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        
        const prevNode = this.get(idx - 1);
        const removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
    reverse() {
        const newTail = this.head;
        let current = this.head.next;
        let prev = newTail;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.tail = newTail;
        this.tail.next = null;
        return this;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("there");
list.push("Woramon");

list.traverse();

list.pop();
list.traverse();