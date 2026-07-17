/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const counts = new Map();
//     for (let n of nums) {
//         if (counts.has(n)) {
//             counts.set(n, counts.get(n) + 1);
//         } else {
//             counts.set(n, 1);
//         }
//     }
//     for (const [num, count] of counts) {
//         if (count > 1) return true;
//     }
//     return false;
// };
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let n of nums) {
        if (seen.has(n)) return true;
        seen.add(n);
    }
    return false;
};