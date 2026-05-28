class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        const numsMap = new Map();
        for(let i=0; i<nums.length; i++) {
            if(!numsMap.has(nums[i])) {
                numsMap.set(nums[i],1)
            }
        }
        let maxLen = 1;
        for(let i=0;i<nums.length; i++) {
            let item = nums[i];
            if (!numsMap.has(item - 1)) {
                let currLen = 1;
                while(numsMap.has(item + 1)) {
                    currLen ++;
                    item = item + 1;
                }
                maxLen = Math.max(maxLen, currLen);
            }
        }
        return maxLen;
    }
}