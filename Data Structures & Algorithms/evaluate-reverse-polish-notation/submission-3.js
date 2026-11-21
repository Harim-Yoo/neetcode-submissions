class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let result = 0;
        for (let char of tokens) {
            if (char !== '+' && char !== '-' && char !== '*' && char != '/') {
                stack.push(char);
            } else {
                let second = Number(stack.pop());
                let first = Number(stack.pop());
                if (char === '*') result = first * second;
                else if (char === '+') result = first + second;
                else if (char === '/') result = Math.trunc(first/second);
                else if (char === '-') result = first - second;
                stack.push(result);
            } 
        }
        return stack[0];
    }
}
