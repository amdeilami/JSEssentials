/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
     * Thinking on it...
     * my previous implementation got accepted but was too slow
     * using two pointer approach for faster execution
     */
    
    let last = 1; // last valid element
    let target = nums[0];
    let counter = 1; // how many of the target values we have seen?
    let limit = 2;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] == target) {
            counter++;
            if (counter <= limit) {
                nums[last] = nums[i];
                last++;
            }
        } else { // we saw a new value!
            nums[last] = nums[i];
            last++;
            counter = 1;
            target = nums[i];
        }
    }

    return last;
    
};



// var removeDuplicates = function(nums) {
//     /**
//      * Thinking on it...
//      * I will create a pointer, pointing to the last element
//      * whenever facing a redundant element, swap it with last valid element
//      * move the new value to right like a bubble, till the order is correct again
//      */
    
//     let last = nums.length-1;
//     let target = nums[0]; // the current value that we are seeking
//     let counter = 0; // how many of the target values we have seen?
//     let limit = 2;

//     for (let i = 0; i <= last; i++) {

//         if (nums[i] == target) {
//             counter++;
//         } else { // we saw a new value!
//             counter = 1;
//             target = nums[i];
//         }

//         if (counter > limit) {
//             let temp = nums[last];
//             nums[last] = nums[i];
//             nums[i] = temp;
//             last--;
//             counter--;
//             // now we need to move the new value (nums[i]) to a right place
//             let j = i;
//             while (nums[j] > nums[j+1] && j < last) {
//                 temp = nums[j+1];
//                 nums[j+1] = nums[j];
//                 nums[j] = temp;
//                 j++;
//             }
//             // there is a new value in nums[i], so decrement it to evaluate it again
//             i--;
//         }

//     }

//     let newSize = last + 1;
//     return newSize;
    
// };