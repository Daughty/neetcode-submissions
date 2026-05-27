class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stringWithoutSpaces = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const newStrLen = stringWithoutSpaces.length;
        let i=0,j=newStrLen-1;
        while(i < j) {
            if(stringWithoutSpaces[i] !== stringWithoutSpaces[j]) {
                return false;
            } else {
                i++;
                j--;
            }
        }
        return true;
    }
}
