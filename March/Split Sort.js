/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/
function merge(nums1, nums2){
    //Starting index of our arrays
    idx_nums1 = 0;
    idx_nums2 = 0;
    //Array to return
    returnArray = []
    //Boolean to check if we have processed all of the array
    bool_num1Progress = nums1.length != idx_nums1; 
    bool_num2Progress = nums2.length != idx_nums2; 
    //Run while we have not progressed through all of the array
    while(bool_num1Progress && bool_num2Progress){
        //Logic for when our current number in nums1 is greater than curren number in nums2
        if(nums1[idx_nums1]>nums2[idx_nums2]){
            returnArray.push(nums2[idx_nums2]);
            idx_nums2++;
            bool_num2Progress = nums2.length != idx_nums2; //Update boolean value
            //Logic for when our current number in nums2 is greater than curren number in nums1
        }else if(nums1[idx_nums1]<nums2[idx_nums2]){
            returnArray.push(nums1[idx_nums1]);
            idx_nums1++;
            bool_num1Progress = nums1.length != idx_nums1; //Update boolean value
        }
    }
    //Once we reach the end of an array, we need to merge the remaining numbers
    //Already had booleans to check for Progress in the array when it has not been fully copied. Use those.
    if(bool_num1Progress){
        return returnArray.concat(nums1.slice(idx_nums1, nums1.length))
    } else if(bool_num2Progress){
        return returnArray.concat(nums2.slice(idx_nums2, nums2.length))
    }
}

console.log(merge([1,5,6], [2, 3, 4]));
/*
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

function mergeSort(numArray){

}

// Recursion sample: 
/*
function sum(num){
    if(num === 1){ // this is our base case, because once num hits 1, we don't want to keep reducing it, as it doesn't add more information that's useful or accurate
        return 1;
    }

    return num + sum(num-1); // this is our recursive case, because it's where the function calls itself
}*/