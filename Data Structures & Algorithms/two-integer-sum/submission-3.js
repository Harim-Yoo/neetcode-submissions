class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
	const hMap = new Map();
	
	for (let i=0; i<nums.length; i++) {
		const j = target - nums[i];
		if (hMap.has(j)) {
			return [hMap.get(j),i].sort();
		}
		hMap.set(nums[i],i)
	}
}
}