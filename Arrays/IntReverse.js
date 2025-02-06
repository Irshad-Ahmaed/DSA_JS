function reverseNumber(num){
    let numStr = num.toString();

    numStr = numStr.split("")
    numStr.reverse()
    numStr = numStr.join("");

    // numStr = numStr - '0'; // parseInt(numStr) , it will convert it to number
    numStr = parseInt(numStr) * Math.sign(num);
    return numStr;
}

console.log(reverseNumber(1235));
console.log(reverseNumber(-1235)); // You need Math.sign() method if want sign + or -