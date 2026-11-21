class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        let array = [];
        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                array.push(char);
            } else if ((char === '}') && (array.pop() !== '{')) {
                array.pop();
                return false;
            } else if ((char === ']') && (array.pop() !== '[')) {
                array.pop();
                return false;
            } else if ((char === ')') && (array.pop() !== '(')) {
                array.pop();
                return false;
            } 
        }
        if (array.length !== 0) {
            return false;
        }
        return true;
    }
}

