class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let currProf = 0;
        let maxPrice = 0;
        let j = prices.length-1;
        for(let j=prices.length-1; j>=0; j--) {
            maxPrice = Math.max(maxPrice,prices[j]);
            currProf = maxPrice - prices[j];
            maxProf = Math.max(maxProf,currProf);
        }
        return maxProf;
    }
}
