class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        if(value){
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        }
    }

    // Add a new Node at last of LL
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;

        this.tail = newNode

        this.length++;
    }

    // Remove Last Node of LL
    pop(){
        if(this.length === 0){
            return null;
        }

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this.head;
        }

        let temp = this.tail;

        this.tail = this.tail.prev; // this.tail.prev-> second last element of the LL
        this.tail.next = null;
        temp.prev = null; // removed element marked null

        this.length--;

        return temp;
    }

    // Add a new Node at starting
    unshift(value){
        const newNode = new Node(value);

        if(!this.head || this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
            return newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
        return newNode;
    }

    // Remove First Node from LL
    shift(){
        if(!this.head){
            return null;
        }
        
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }

        let temp = this.head;
        this.head = temp.next;
        this.head.prev = null;
        
        this.length--;
        temp = null;

        return temp;
    }

    // Reverse the DLL
    reverse() {
        let current = this.head;
        let next = null;
        
        // Swap head and tail
        this.head = this.tail;
        this.tail = current;
        
        // Traverse the list and swap next and prev for each node
        while (current !== null) {
            // Swap next and prev pointers
            next = current.next;
            current.next = current.prev;
            current.prev = next;
            
            // Move to the next node (which is now the previous node)
            current = current.prev;
        }
    }    
}

let myDoublyLL = new DoublyLinkedList(1); // 0 will give false in 'if statement' of constructor
myDoublyLL.push(2);
myDoublyLL.push(3); 
// console.log(myDoublyLL.pop());
// console.log(myDoublyLL.unshift(4));
// console.log(myDoublyLL.shift());
// console.log(myDoublyLL);
myDoublyLL.reverse();
console.log(myDoublyLL);
// console.log([] + [] + 'gello'.split(''));