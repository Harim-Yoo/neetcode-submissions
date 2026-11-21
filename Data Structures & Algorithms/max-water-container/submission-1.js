class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = (right-left)*Math.min(heights[left],heights[right]);
        
        while (left < right) {
            if (heights[left]<heights[right]) {
                left ++;
            } else if (heights[left]>=heights[right]) {
                right --;
            }
            maxArea = Math.max((right-left)*Math.min(heights[left],heights[right]),maxArea)
        }
        return maxArea;
    }
}
