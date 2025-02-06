function ReverseString(spell){
    let arr = new Array(spell.length); // OR spell.split("")

    for(let i=0; i<spell.length; i++){
        arr[i]= spell.charAt(i);
    }

    for(let i=0; i<arr.length/2; i++){  // arr.reverse()
        let temp = arr[i];
        arr[i] = arr[spell.length-i-1];
        arr[spell.length-i-1] = temp;
    }
    arr = arr.join("");
    return arr; // arr.join("")
}

console.log(ReverseString('apple'));