class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
	if (s.length !== t.length) {
		return false
	}
	const hashMap = new Map()
	for (let i=0; i<s.length; i++) {
		hashMap.set(s[i],(hashMap.get(s[i])||0)+1)
	}
	for (let char of t) {
	  if (!hashMap.get(char)>0) { return false }
	   hashMap.set(char,hashMap.get(char)-1)
	  }
	return true
}
}
