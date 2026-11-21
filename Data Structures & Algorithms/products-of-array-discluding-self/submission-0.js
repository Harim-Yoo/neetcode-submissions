class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length);
        let suffix = new Array(nums.length);
        for (let i=0;i<nums.length;i++) {
            if (i === 0) {
                prefix[i] = 1;
            } else {
                prefix[i] = prefix[i-1] * nums[i-1];
            }
        }   

        for (let i=nums.length-1;i>=0;i--) {
            if (i === nums.length -1) {
                suffix[i] = 1
            } else {
                suffix[i] = suffix[i+1] * nums[i+1]}
                
        }

        let result = new Array(nums.length);
        for (let j=0;j<nums.length;j++) {
            result[j] = prefix[j] * suffix[j];
        }
        return result;
    }
}
