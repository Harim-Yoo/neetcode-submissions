class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";
        for (let str of strs) {
            string += str.length + '#' + str;
        }
        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let array = [];

        let index = str.indexOf("#");
        while (index !== -1) {
            let length = Number(str.slice(0,index));
            array.push(str.slice(index+1,index+length+1));
            str = str.slice(index+length+1);
            index = str.indexOf('#');
        }
        return array;
    }
}
