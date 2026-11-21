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
            } else if (char === "+") {
                let second = Number(stack.pop());
                let first = Number(stack.pop());
                result = first + second;
                stack.push(result);
            } else if (char === '*') {
                let second = Number(stack.pop());
                let first = Number(stack.pop());
                result = first * second;
                stack.push(result);
            } else if (char === '-') {
                let second = Number(stack.pop());
                let first = Number(stack.pop());
                result = first - second;
                stack.push(result);
            } else if (char === '/') {
                let second = Number(stack.pop());
                let first = Number(stack.pop());
                result = Math.trunc(first / second);
                stack.push(result);
            }
        }
        return stack[0];
    }
}
