/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx, left idx, or right idx
        - can also be a random index if you wanna go crazy
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: new idx of the pivot value or the index where the left section of
        smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/
function partition(nums, left=0, right=nums.length-1){
    pivot = nums.length/2;
    // 1. Get Pivot value
    pivot_val = nums[pivot];
    console.log(pivot_val)
    //2. Move Pivot to the end of the array, swapping values.
    temp = nums[right];
    nums[right] = pivot_val;
    nums[pivot] = temp;
    
    //5b. If right idx = left idx, all values left of the left bound are less than the pivot and all values right of the 
    //    right bound are greater than the pivot. End loop.
    while(right > left){
    //3. Move left bound right until it reaches a value greater than or equal to the pivot
        while(nums[left] < pivot_val){
            left++;
        }
    //4. Move right bound left until it either crosses left or finds a value less than the pivot
        while(nums[right] >= pivot && right > left){
            right--;
        }
    //5a. If right val < left val, swap the two and reset indexes to preform 3-5 again.
        if(nums[right] < nums[left]){
            temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;

            left = 0;
            right = nums.length - 1;
        }
    }

    //6. Swap left with pivot. Return left, since that's our new index for pivot
    temp = nums[left];
    nums[left] = nums[nums.length - 1];
    nums[nums.length - 1] = temp;
    return left;
}


array1 = [1, 9, 5, 4, 7, 3, 0, 2];
console.log("New index for pivot:" + partition(array1));
console.log(array1);