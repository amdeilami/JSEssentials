/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let lastWord = s.length - 1;
    while (lastWord >= 0) {
        if (s[lastWord] == ' ') {
            lastWord--;
        } else {
            break;
        }
    }

    // so "lastWord" will contain the last character of the last word
    let length = 0;

    for (let i = lastWord; i >= 0; i--) {
        if (s[i] == ' ') {
            return length;
        } else {
            length++;
        }
    }

    return length;

};