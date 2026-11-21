class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        let result = [];
    const hashMap = new Map();
    for (let str of strs) {
        const sortedKey = [...str].sort().join("");
        if (!hashMap.has(sortedKey)) {
            hashMap.set(sortedKey, [])
        }
        hashMap.get(sortedKey).push(str)
    }
    return [...hashMap.values()]
    }
}
