class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // PUSH Method
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // POP Method
    pop() {

        // If there is no head in LL
        if (!this.head) {
            return null;
        }

        // If only one element in LinkedList
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let newHead = this.head;
        let prev;

        while (newHead.next) {
            prev = newHead;
            newHead = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
    }

    // Add item at start
    unshift(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }


        let newHead = this.head;
        this.head = newNode;
        this.head.next = newHead;
        this.length++;
    }

    shift() {
        if (!this.head) return null;

        let newHead = this.head;
        this.head = this.head.next;
        newHead.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
    }

    getFirst() {
        return this.head;
    }

    // Get last element of LL
    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    get(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        const newNode = new Node(value);
        // Uses the get method to find the node right before the desired position (index - 1).
        const temp = this.get(index - 1);

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.unshift(0);
// myLinkedList.pop();
// myLinkedList.shift();
// console.log(myLinkedList.get());
// console.log(myLinkedList.getLast);
// console.log(myLinkedList.set(1, 2));
console.log(myLinkedList.insert(1,5));
// console.log(myLinkedList.size());
// console.log(myLinkedList.clear());
console.log(myLinkedList);