class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mappi = new Map();
        for(let i=0;i<nums.length; i++){
            if(mappi.get(nums[i])) {
                return true;
            } else {
                mappi.set(nums[i], 1)
            }
        }
        return false;
    }
}
