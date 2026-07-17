/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // We only need to make one pass here.
    // Find the lowest number, find the highest number
    // Issue: The lower number must combe before the higher number
    // If we find a working pair, how do we know there is not better?
    // [3,11,4,1,10]
    // Lowest: 3
    // Highest: 11
    // 

    // Better would be 1,10
    let newLow = prices[0];
    let high = prices[0];
    let profit = 0;
    for (let i of prices){
        // let profit = newLow - i;
        if (i < newLow){
            newLow = i;
        }
        if (i - newLow > profit){
            high = i;
            profit = i - newLow;
        }
    }
    return profit;
};
