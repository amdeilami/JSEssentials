/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var k = 0; // the number of elements in `nums` which are not equal to val
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            k++;
        } else {
            /* trying to find an element from end of the array 
                to replace the current element
            */
            var j = nums.length - 1;
            while (nums[j] == val) {
                j--;
            }
            if (j <= i) {
                /* means we searched from end till current item 
                    but no other elements are equal 
                    to val, so we are done.
                */
                break;
            }
            // swapping values
            [nums[i], nums[j]] = [nums[j], nums[i]];
            /* we haven't counted the replaced item, 
                so getting back to this in the next iteration 
            */
            i--;
        }
    }
    return k;
};