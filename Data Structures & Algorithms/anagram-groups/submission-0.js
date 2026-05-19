class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [strs]
        const mappi = new Map();
        const result = [];
        for(let i=0; i<strs.length; i++) {
            const sortedStr = strs[i].split('').sort().join('');
            if(mappi.has(sortedStr)) {
                mappi.get(sortedStr).push(strs[i]);
            } else {
                mappi.set(sortedStr, [strs[i]]);
            }
        }
        console.log(mappi);
        for(const [keys,values] of mappi) {
            result.push(values)
        }
        return result;
    }
}
