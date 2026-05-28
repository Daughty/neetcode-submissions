class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let multipler = 1;
        let result = [];
        let countZero = 0;
        for(let i=0;i<nums.length;i++) {
            if(nums[i]!==0) {
              multipler = multipler * nums[i]
            } else {
                countZero++;
            }
        }

        for(let i=0;i<nums.length;i++) {
            if(nums[i]!==0 && !countZero) {
                result.push(multipler/nums[i]);
            } else if (nums[i]!==0 && countZero) {
                result.push(0);
            }
            else if (countZero > 1) {
                result.push(0);
            } else {
                result.push(multipler);
            }
        }
        return result;
       
    }
}
