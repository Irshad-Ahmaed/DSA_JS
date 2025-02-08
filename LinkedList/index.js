class Node{
    constructor(value){
        this.head = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    // PUSH Method
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // POP Method
    pop(){

        // If there is no head in LL
        if(!this.head){
            return null;
        }
        
        // If only one element in LinkedList
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let newHead = this.head;
        let prev;

        while(newHead.next){
            prev = newHead;
            newHead = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
    }

    // Add item at start
    unshift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        
        let newHead = this.head;
        this.head = newNode;
        this.head.next = newHead;
        this.length++;
    }

    shift(){
        if(!this.head) return null;

        let newHead = this.head;
        this.head = this.head.next;
        newHead.next = null;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }
    }

    getFirst(){
        return this.head;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.unshift(0);
// myLinkedList.pop();
myLinkedList.shift();
console.log(myLinkedList);