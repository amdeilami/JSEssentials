/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = 0; // index of the day that we should buy
    let sell = 1; // index of the day that we should sell
    // always sell > buy
    while (sell < prices.length) {
        if (prices[sell] - prices[buy] > maxProfit) {
            maxProfit = prices[sell] - prices[buy];
            sell++;
        } else if (prices[sell] - prices[buy] < 0 ) {
            buy++;
            sell = (buy >= sell) ? buy+1 : sell;
        } else {
            sell++;
        }
    }
    return maxProfit;
    
};