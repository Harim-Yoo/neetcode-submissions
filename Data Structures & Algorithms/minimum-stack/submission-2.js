class MinStack {
    constructor() {
        this.array = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (typeof val !== 'number') {
            this.array.push(null);
            return;
        }
        if (this.array.length === 0) {
            this.array.push({val:val,min:val})
        } else {
            let prevMin = this.array[this.array.length-1].min;
            this.array.push({val:val, min:Math.min(val, prevMin)});
        }
        
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length-1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.array[this.array.length-1].min;
    }
}
