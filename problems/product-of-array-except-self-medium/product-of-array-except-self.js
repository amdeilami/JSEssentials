/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * tried to write functional code this time
 * map and reduce work on all elements, the first elements for left-
 * and right array should be `1`, so I used `slice` method to get rid of-
 * that redundant element
 */
var productExceptSelf = function (nums) {

    const leftArray = nums.reduce((acc, curr) => {
        acc.push(acc[acc.length - 1] * curr);
        return acc;
    }, [1]).slice(0, -1)

    const rightArrayReversed = nums.reduceRight((acc, curr) => {
        acc.push(acc[acc.length - 1] * curr);
        return acc;
    }, [1])

    const rightArray = rightArrayReversed.reverse().slice(1);

    return nums.map((_, i) => {
        return leftArray[i] * rightArray[i];
    });

};