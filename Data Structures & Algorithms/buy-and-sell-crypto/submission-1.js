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
            let buy = prices[left];
            
            while (left < i) {
                if (prices[left]<=buy) {
                    buy = prices[left];
                }
                left ++;
            }

            maxProfit = Math.max(maxProfit, sell-buy)
        }
        
        return maxProfit;
    }
}
