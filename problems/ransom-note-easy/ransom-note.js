/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let countMagazine = {};

    for (let i = 0; i < magazine.length; i++) {
        if (magazine[i] in countMagazine) {
            countMagazine[magazine[i]]++;
        } else {
            countMagazine[magazine[i]] = 1;
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomNote[i] in countMagazine && countMagazine[ransomNote[i]] > 0) {
            countMagazine[ransomNote[i]]--;
        } else {
            return false;
        }
    }


    return true;
};