class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0, currArea = 0;
        let i=0;
        let j = heights.length-1;
        while (i<j && i<heights.length-1) {
            currArea = Math.min(heights[j],heights[i])*(j-i);
            if(heights[i]<=heights[j]) {
                i++;
            } else {
                j--;
            }
            maxArea = Math.max(maxArea, currArea);
        }
        return  maxArea;

    }
}
