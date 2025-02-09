/**
 * My solution's time complexity is O(N^2) which is not very good but got accepted by the judge anyway
 * In each iteration, I shift all remaining elements of nums[] to the left by a calculated amount
 * a better solution, is to have a pointer starting from the beginning that should finally point to the last element of your array
 * then when you face a new element (which is unique), you move it to the place pointed by the above the pointer and so on...
 */


/**
 * @param {number[]} nums
 * @return {number}
 * modifying in-place brought some restrictions of course!
 */
var removeDuplicates = function (nums) {
    let target = nums[0];
    let uniqueElements = 1;
    let lastValidIndex = nums.length - 1; // we are shrinking nums[] in size somehow
    for (let i = 1; i <= lastValidIndex; i++) {
        if (nums[i] > target) {
            target = nums[i];
            uniqueElements++;
        } else if (nums[i] === target) {
            let shiftAmount = 1;
            let k = i + 1;
            // dtermining how much should we shift
            while (nums[k] === target) {
                shiftAmount++;
                k++;
            }
            for (let j = i; j + shiftAmount <= lastValidIndex; j++) {
                nums[j] = nums[j + shiftAmount];
                //  at the first iteration, we replace nums[i], 
                //  that's why I decrement i at the end
            }
            lastValidIndex -= shiftAmount;
            i--;    // the outer for loop brings it back
                    // since now nums[i] is an updated value
        }
    }
    return uniqueElements;
};