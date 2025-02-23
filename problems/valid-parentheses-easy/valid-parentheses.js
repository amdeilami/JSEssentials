/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * leveraging stack for this question, and more specifically the push() and pop() functions
 * for arrays in javascript
 */

var isValid = function(s) {
    let stack = [];

    for (let i = 0 ; i < s.length ; i++) {
        switch (s[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(s[i]);
                break;
            case `]`:
            case `}`:
            case `)`:
                let tempChar;
                if (s[i] == `]`) {
                    tempChar = `[`;
                } else if (s[i] == `}`) {
                    tempChar = `{`;
                } else {
                    tempChar = `(`;
                }
                
                if (stack.length == 0) {
                    return false;
                } else if (stack[stack.length-1] == tempChar ) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default:
                return false; // invalid character
        }
    }

    return stack.length == 0;
};