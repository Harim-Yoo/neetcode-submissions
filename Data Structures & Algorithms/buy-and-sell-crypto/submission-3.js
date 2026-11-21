class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    /*
    [1,2,3,4,5]; -1 + 5 = 4
    */
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = prices[0];
        for (let i=1; i<prices.length ;i++) {
            const sell = prices[i];
            if (prices[i]<buy) {
                buy = prices[i];
            }
        
            maxProfit = Math.max(maxProfit, sell-buy)
        }
        
        return maxProfit;
    }
}
