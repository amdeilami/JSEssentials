/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    let sCount = {}

    if (s.length != t.length) {
        return false;
    } else {
        for (let i = 0; i < s.length; i++) {
            sCount[s[i]] = (sCount[s[i]] == undefined) ? 1 : sCount[s[i]] + 1;
        }
    }

    for (let i = 0; i < t.length; i++) {

        if (sCount[t[i]] == undefined || sCount[t[i]] == 0) {
            return false;
        } else {
            sCount[t[i]]--;
        }

    }

    return true;

};