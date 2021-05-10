/* 
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
    
    EXAMPLE:
    let arr = [1,3,4,5,6,8,9,11];

    allNonConsecutive(arr) should return:
    [
        { i: 1, n: 3 },
        { i: 5, n: 8 },
        { i: 7, n: 11 }
    ]
*/
function allNonConsecutive(sortedNums){
    var nonConsectutiveNums = []
    for(var i = 0; i < sortedNums.length-1; i++){
        if(sortedNums[i] + 1 != sortedNums[i+1]){
            let consecutiveIdxVal = { index: i+1, value: sortedNums[i+1]};
            nonConsectutiveNums.push(consecutiveIdxVal);
        }
    }
    return nonConsectutiveNums;
}

console.log(allNonConsecutive([1,3,4,5,6,8,9,11]));


/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let arr = [2, 5, 3, 6, 7, 23, 12];
    let targetSum = 16;

    findConsqSums(arr, targetSum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ] 
*/
function findConsqSums(nums, sum, allConsqSums = []){
    var arraySum = 0;

    for(var i = 0; i < nums.length; i++){
        arraySum += nums[i];
    }
    console.log(`nums: ${nums}`)
    if(arraySum == sum){
        allConsqSums.push(nums);
    }
    console.log(`allConsqSums: ${allConsqSums}`)
    if(nums[0] != nums[nums.length-1]){
        findConsqSums(nums.slice(0, nums.length-1), sum, allConsqSums);
        findConsqSums(nums.slice(1, nums.length-1), sum, allConsqSums);
    }
    
    return allConsqSums;

    
}

let arr = [2, 5, 3, 6, 7, 23, 12];
let targetSum = 16;

console.log(findConsqSums(arr, targetSum));