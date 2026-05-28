class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const numsSet = new Set(nums);
        let maxLen = 1;
        for(let i=0;i<nums.length; i++) {
            let item = nums[i];
            if (!numsSet.has(item - 1)) {
                let currLen = 1;
                while(numsSet.has(item + 1)) {
                    currLen ++;
                    item = item + 1;
                }
                maxLen = Math.max(maxLen, currLen);
            }
        }
        return maxLen;
    }
}