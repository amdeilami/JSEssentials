/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // we can leverage the fact that last n spots of nums1 are empty
    let j = n - 1;
    let i = m - 1;
    for (let k = m+n-1; k > -1; k--) {
        if (j < 0) {
            // we ran out of elements in nums2, so fill everything else with nums1
            while (i > -1) {
                nums1[k] = nums1[i];
                i--;
                k--;
            }
        } else if (i < 0) {
            // we ran out of elements in nums1, so fill the rest with muns2
            while (j > -1) {
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        } else {
            if (nums2[j] >= nums1[i]) {
                nums1[k] = nums2[j];
                j--;
            } else {
                nums1[k] = nums1[i];
                i--;
            }
        }
    }

};