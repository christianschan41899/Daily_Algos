
const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if(nums.length <= 2){
        return -1;
    }

    
    for(var index1 = 1; index1 < nums.length - 2; index1++){
        //Slice returns an array between certain indecies, so make arrays that are left and right of 
        //the index
        var leftSum = 0;
        var rightSum = 0;
        var leftnums = nums.slice(0, index1);
        var rightnums = nums.slice(index1 + 1, nums.length);
        //Sum left numbers
        for(var i = 0; i < leftnums.length; i++){
            leftSum += leftnums[i];
        }
        //Sum right numbers
        for(var j = 0; j < rightnums.length; j++){
            rightSum += rightnums[j];
        }
        //Check for equal sums. If so, return index1
        if(leftSum == rightSum){
            return index1;
        }
    }
    //If all the possible indecies fail, we will get out of the for loop without returning anything
    //So return -1 here
    return -1;
}

balanceIndex(nums1)
balanceIndex(nums2)
module.exports = { balanceIndex };