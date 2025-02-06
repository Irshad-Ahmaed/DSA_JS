function capitalFirstLetter(str){
    let isCap = str.toLowerCase().split(" ");

    isCap = isCap.map(word=> word[0].toUpperCase() + word.slice(1));

    isCap = isCap.join(" ");
    return isCap;
}

console.log(capitalFirstLetter("irshad ahmad"));