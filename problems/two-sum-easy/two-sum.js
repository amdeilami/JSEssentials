/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let numCount = {};
    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (temp in numCount && numCount[temp] != i) {
            return [i, numCount[temp]];
        }
    }

};