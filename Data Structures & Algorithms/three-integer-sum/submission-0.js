class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b);
        let array = [];
        let target;
        for (let i=0;i<nums.length-2;i++) {
            let left = i+1;
            let right = nums.length-1;
            if (-nums[i] === target) {
                continue;
            }
            target = -nums[i];
            while (left<right) {
                if (nums[left]+nums[right] < target) {
                    left++;
                } else if (nums[left]+nums[right] > target) {
                    right--;
                } else {
                    array.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                    while(left<right && (nums[left] === nums[left-1])) {
                        left++;
                    }
                    while (left<right && (nums[right] === nums[right+1])) {
                        right--;
                    }
                }
            }
        }
        return array;
    }
}
