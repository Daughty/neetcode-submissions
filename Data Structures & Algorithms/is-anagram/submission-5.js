class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const mappi = new Map();

        for(let i=0;i<s.length;i++){
                if(mappi.get(s[i])) {
                    mappi.set(s[i],mappi.get(s[i],1) + 1);
                } else {
                    mappi.set(s[i],1);
                }
        }
        for(let j=0;j<t.length;j++) {
                 if(mappi.get(t[j])) {
                    mappi.set(t[j],mappi.get(t[j],1) - 1);
                } else {
                    return false;
                }
        }
        for (const [key, value] of mappi) {
            if(value!==0) {
                return false;
            }
        }
        return true;
    }
}
