class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const t = temperatures;
        let result = new Array(t.length).fill(0);
        const stack = [];

        for (let i=0;i<t.length;i++) {
          while (stack.length >0 && t[stack[stack.length-1]] < t[i]) {
            const index = stack.pop();
            result[index] = i-index;
          }
          stack.push(i);
        }

        // first, 
        return result;
    }
}
