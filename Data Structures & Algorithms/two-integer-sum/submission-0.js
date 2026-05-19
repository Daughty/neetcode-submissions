class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mappi = new Map();
        for (let i=0;i<nums.length;i++) {
            if(mappi.has(target-nums[i])) {
                return [mappi.get(target-nums[i]), i]
            } else {
                mappi.set(nums[i],i)
            }
        } 
        console.log(mappi)
        return [];
    }
}
