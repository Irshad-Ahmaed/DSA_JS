const divideArrayInChunks = (arr, num) => {
    let newArray = [];

    let index = 0;

    while(index < arr.length){
        const chunk = arr.slice(index, index+num); // it will give item x to howMuchItem-1
        newArray.push(chunk);
        index = index + num;
    }

    return newArray;
    
}

console.log(divideArrayInChunks([1,2,3,4,5], 2));