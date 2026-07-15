/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const countSeen = new Map();
    for (let i = 0; i < nums.length; i++){
        if (countSeen.has(nums[i])){
            // countSeen.set(`${nums[i]}`,countSeen.get(`${nums[i]}`));
            return true;
        } else{
            countSeen.set(nums[i],1);
        }
    }
    return false;
};