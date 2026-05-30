class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const numsSett = new Set();
        for(let i=0;i<nums.length;i++) {
            if(numsSett.has(nums[i])) {
                return nums[i];
            } 
            numsSett.add(nums[i]);
        }
        return -1;
    }
}
