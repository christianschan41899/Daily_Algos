/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true

    EXAMPLE:
    const nums = [1, 4, 3, 6, 9, 15];

    const callback1 = (elem) => {
        return elem > 5;
    };

    dropIt(nums, callback1) should return [6,9,15] because 6, 9, and 15 are the elements that,
    when passed into callback1, will result in the function returning true.
*/
function dropIt(arr, callback){
    var newArray = [];
    for(let index = 0; index < arr.length; index++){
        if(callback(arr[index])){
            newArray.push(arr[index]);
        }
    }
    return newArray;
}

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
    return elem > 5;
};

console.log(dropIt(nums, callback1));

/* 
    Given to Neil in an interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?

    Palindrome - a word/phrase that is spelled the same way forwards and backwards

    EXAMPLE:
    const str1 = "dda";

    const str2 = "aaadd";

    const str3 = "acdd";

    canStringBecomePalindrome(str1) should return true, because "dda" can be rearranged as "dad", 
    which is the same forwards and backwards.

    canStringBecomePalindrome(str2) should return true, because "aaadd" can be rearranged as "daaad"
    or "adada", which are both the same forwards and backwards.

    canStringBecomePalindrome(str3) should return false, because "acdd" cannot be rearranged in any
    way that would make it the same forwards and backwards
*/
function canStringBecomePalindrome(str){
    //Create frequency table
    var charFrequency = {};
    var length = str.length;

    //Log frequencies
    for(let idx = 0; idx < length; idx++){
        var character = str.charAt(idx);
        if(charFrequency[character]){
            charFrequency[character]++;
        }else{
            charFrequency[character] = 1;
        }
    }
    /* Two cases:
     * 1. Even number of characters; all characters must have an even number if occurences
     * 2. Odd number of characters; all characters must have an even number of occurences except one.
     */
    let valuesArray = Object.values(charFrequency);
    let odds = 0;
    if(length%2 == 0){
        for(let idx = 0; idx < valuesArray.length; idx++){
            if(valuesArray[idx]%2 != 0){
                return false;
            }
        }
        return true;
    }else{
        for(let idx = 0; idx < valuesArray.length; idx++){
            if(valuesArray[idx]%2 != 0){
                odds++;
            }
        }
        if(odds == 1){
            return true;
        }else{
            return false;
        }
    }
}

const str1 = "dda";

const str2 = "aaadd";

const str3 = "acdd";

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));