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
        
        for (let i=1; i<prices.length ;i++) {
            const sell = prices[i];
            let left = 0;
            let profit = sell - prices[left];
            while (left < i) {
                profit = Math.max(profit, sell-prices[left]);
                if (profit<0) {
                    profit = 0;
                }
                left ++;
            }
            maxProfit = Math.max(maxProfit, profit)
        }
        
        return maxProfit;
    }
}
