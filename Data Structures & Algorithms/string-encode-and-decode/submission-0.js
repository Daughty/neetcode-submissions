class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //5#Hello
        let encodedString = ''
        for(let i=0;i<strs.length;i++) {
            encodedString = encodedString + strs[i].length + "#" + strs[i];
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []; 
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            let nextI = i + length;
            res.push(str.substring(i, nextI));
            i = nextI;
        }
        return res;
    }
}