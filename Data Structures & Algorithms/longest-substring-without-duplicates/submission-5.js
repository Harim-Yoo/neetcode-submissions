class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if (s === "") {
            return 0;
        }
        let maxCount = 1;
        let left = 0;
        let right = 1;
        //zxyzxyz

        const hMap = new Map();
        hMap.set(s[left],1)
        
        while (right < s.length) {
            if (!hMap.has(s[right])) {
                hMap.set(s[right],1);
                right++;
            } else {
                hMap.delete(s[left]);
                left++;
            }
            maxCount = Math.max(maxCount, right-left);
            
        }

        return maxCount;

    }
}
