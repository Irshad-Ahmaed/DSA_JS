function BuyAndSellStock(arr){
    let min = arr[0];
    let profit = 0;

    for(let i=1; i<arr.length; i++){
        min = Math.min(min, arr[i]);

        profit = Math.max(profit, arr[i]-min);
        // console.log('profit', arr[i]-min);
    }

    return profit;

}

const stocks = [7,2,5,4,6,1];
console.log(BuyAndSellStock(stocks));