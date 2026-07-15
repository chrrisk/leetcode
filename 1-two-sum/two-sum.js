/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++){
        let newTarget = target - nums[i];
        if (seen.has(`${newTarget}`)){
            return [i,seen.get(`${newTarget}`)];
        }
        seen.set(`${nums[i]}`, i);
    }
}
// this is a brute force. Here is another idea, 
// Add each thing you find into a dictionary / map
// then use target - value for each value, and lookup into the dictionary until you find (2n?)

