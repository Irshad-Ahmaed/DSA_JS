class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        // console.log(this.data[this.length]);
    }

    get(index){
        return this.data[index];
    }

    pop(){
        delete this.data[this.length-1];
        this.length--;
    }

    shift(){
        const firstItem = this.data[0];

        for(let i=0; i<this.length; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;

        return firstItem;
    }

    deleteByIndex(idx){
        const deletedItem = this.data[idx];

        for(let i=idx; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;

        return deletedItem;
    }
}

const newArray = new MyArray();

newArray.push('Irshad');
newArray.push('Faizan');
newArray.push('Dilshad');

console.log(newArray);

// console.log(newArray.get(1));

// newArray.pop();

// console.log(newArray.shift());

console.log(newArray.deleteByIndex(2));

console.log(newArray);