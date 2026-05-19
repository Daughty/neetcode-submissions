class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mappi = new Map();
        const anchorToCount = []
        const finalResult = [];
        for(let i=0;i<nums.length; i++) {
            if(mappi.has(nums[i])) {
                mappi.set(nums[i],[nums[i],mappi.get(nums[i])[1] + 1])
            } else {
                mappi.set(nums[i],[nums[i], 1])
            }
        }
        console.log(mappi)
        for (const [keys, values] of mappi) {
            anchorToCount.push(values);
        }
        console.log(anchorToCount)
        const totalLen = anchorToCount.length;
        anchorToCount.sort((a,b)=>b[1]-a[1])
        console.log(anchorToCount)
        while(k) {
            console.log('k',k)
            finalResult.push(anchorToCount[k-1][0])
            k=k-1;
        }
        return finalResult;
    }
}
