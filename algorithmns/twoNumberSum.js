/**
 * Write a function that takes two parameters: 
 * A non-empty array of distinct integers and an integer representing a target sum. 
 * If any two numbers in the array sum up to the target sum, 
 * the function should return them in an array.
 *  If no two numbers sum up to the target sum, the function should return an empty array.
 */


// first way
// function twoNumberSum(array, targetSum){
//     let result = []

//     for(i=0; i < array.length; i++){
//         for(j=i+1; j < array.length; j++){
//             if (array[i]+array[j]=== targetSum){
//                 result.push(array[i])
//                 result.push(array[j])
//                 return result
//             }
//         }
//     }
//     return result
// }

// console.log(twoNumberSum([2,4,5,6,7], 6))

//second way

// function twoNumberSum(array, targetSum){
// Sort the array and iterate it with one pointer at each extreme
// At each iteration, check if the sum of the two pointers is bigger or smaller than the target
// If it's bigger, move the right pointer to the left
// If it's smaller, move the left pointer to the right
//    

//third way

function twoNumberSum(array, targetSum) {
    // Iterate over array once, and at each iteration
    // check if the number you need to get to ther target exists in the array
    // If it exists, return its index and the present number index
	let result = []

	for (let i = 0; i < array.length; i++) {
        let desiredNumber = targetSum - array[i]
        if (array.indexOf(desiredNumber) !== -1 && array.indexOf(desiredNumber) !== i) {
            result.push(array[i])
            result.push(array[array.indexOf(desiredNumber)])
            break
        }
	}

    return result
}
    