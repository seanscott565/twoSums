/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = []
    
    let cloneArr = nums.slice(0)
    cloneArr.sort((a, b) => a - b)
    
    for (let i = 0, j = nums.length - 1; i < j;) {
        let sum = cloneArr[i] + cloneArr[j]
        if (sum === target) {
            for (k = 0; k < nums.length; k++) {
                if (cloneArr[i] === nums[k] || cloneArr[j] === nums[k]) {
                    solution.push(k)
                } 
            } 
            return solution;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
        
    }
};
