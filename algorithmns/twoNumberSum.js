/**
 * Write a function that takes two parameters: 
 * A non-empty array of distinct integers and an integer representing a target sum. 
 * If any two numbers in the array sum up to the target sum, 
 * the function should return them in an array.
 *  If no two numbers sum up to the target sum, the function should return an empty array.
 */

function twoNumberSum(array, targetSum){
    let result = []

    for(i=0; i < array.length; i++){
        for(j=i+1; j < array.length; j++){
            if (array[i]+array[j]=== targetSum){
                result.push(array[i])
                result.push(array[j])
                return result
            }
        }
    }
    return result
}

console.log(twoNumberSum([2,4,5,6,7], 6))