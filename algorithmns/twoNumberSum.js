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


/**
 * So how can we compare which solution is better? They all accomplish their goal, right?

But besides effectiveness (whether the goal is achieved or not), 
we should also evaluate algorithms in terms of efficiency,
 meaning which solves the problem using the smallest amount 
 of resources in terms of time (processing time) and space (memory usage).

An automatic thought that comes up when first thinking about this is, 
"Just measure how long it takes the algorithm to run". And that's valid. 
But the problem is the same algorithm might take longer or shorter on a different 
computer given its hardware and configuration. And even in the same 
computer it might take longer or shorter to run given the background 
tasks you got running at that given moment.

What we need is an objective and invariable way of measuring an algorithm's performance, 
and that's exactly what asymptotic notation is for.

Asymptotic notation (also called Big O notation) is a system that allows us
 to analyze and compare the performance of an algorithm as its input grows. 

 Big O is a standardized method to analyze and compare the complexity 
 (in terms of runtime and space) of different algorithms. 
 The big O complexity of an algorithm will always be the same no 
 matter what computer you “calculate it” in, because the complexity 
 is calculated on how the number of operations of the algorithm varies 
 when the input varies, and that relationship always stays the same no matter the environment.

There're are a lot of different possible complexities an algorithm can have,
 but the most common ones are the following:

Constant — O(1): When the number of operations/space required is always the 
same independently from the input. Take for example a function that takes a
 number as input and returns that number minus 10. No matter if you give it 
 100 or 1000000 as input, that function will always perform a single operation
  (rest 10), so the complexity is constant O(1).
Logarithmic — O(log n): When the number of operations/space required grows at an
increasingly slower rate compared to the growth of the input.
 This type of complexity is often found in algorithms that take a divide and 
 conquer approach or in search algorithms. The classic example is binary search, 
 in which the dataset you have to go through continually halves until you reach the final result.

 Linear —O(n): When the number of operations/space required grow at the same rate as the input.
  Take for example a loop that prints every single value found in an array.
   The number of operations will grow together with the length of the array, 
   so the complexity is linear O(n).
Quadratic — O(n²): When the number of operations/space required grow at the power 
of two regarding to the input. Nested loops are the classic example for this one. 
Imagine we have a loop that iterates through an array of numbers, and within that
 loop we have another one that iterates the whole array again. For 
every value in the array we’re iterating over the array twice, so the complexity is quadratic O(n²).

Note that the same notation is used when talking about both time and space complexity. Say for example we have a function that always creates an array with a single value no matter the input it receives, 
then the space complexity will be constant O(1), and so on with the other complexity types.

To better understand all this, let's go back to our problem and analyze our solution examples.
Example
 */

function twoNumberSum(array, targetSum) {
    let result = []
    // We use a nested loop to test every possible combination of numbers within the array
        for (let i = 0; i < array.length; i++) {
          for (let j = i+1; j < array.length; j++) {
              // If we find the right combination, we push both values into the result array and return it
              if (array[i] + array[j] === targetSum) {
                  result.push(array[i])
                  result.push(array[j])
                  return result
              }
          }
      }
      // Return the result array
      return result
}

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []


/**
 * In this example we're iterating over the parameter array,
 *  and for each value within the array, we're iterating the whole array again
 *  looking for a number that sums up to the target sum.

Each iteration counts as a task.

    If we had 3 numbers in the array, we would iterate 3 times for 
    each number and 9 more times (3 times the three numbers in the array.) 12 tasks total.
    If we had 4 numbers in the array, we would iterate 4 times for
     each number and 16 more times (4 times the four numbers in the array.) 20 tasks total.

    If we had 5 numbers in the array, we would iterate 5 times for each number and 25 more times (5 times the five numbers in the array.) 25 tasks total.

You can see how the number of tasks
 in this algorithm grows exponentially and disproportionally 
 compared to the input. The complexity for this algorithm is quadratic – O(n²).

Whenever we see nested loops, we should think quadratic complexity => BAD => There's probably a better way to solve this.

 */

function twoNumberSum(array, targetSum) {
	// Sort the array and iterate it with one pointer at each extreme
	// At each iteration, check if the sum of the two pointers is bigger or smaller than the target
	// If it's bigger, move the right pointer to the left
	// If it's smaller, move the left pointer to the right
	let sortedArray = array.sort((a,b) => a-b)
	let leftLimit = 0
	let rightLimit = sortedArray.length-1

	while (leftLimit < rightLimit) {
			const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]

			if (currentSum === targetSum) return [sortedArray[leftLimit], sortedArray[rightLimit]]
			else currentSum < targetSum ? leftLimit++ : rightLimit--        
	}

	return []
}

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []

/**
 * Here we're sorting the algorithm before we iterate it.
 *  And then we only iterate it once, using a pointer at each extreme of the array and iterating 
 * "inwards".

This is better than the solution before, since we're only iterating once.
 But we're still sorting the array (which usually has a logarithmic complexity) 
 and then iterating once (which is linear complexity). 
The algorithmic complexity of this solution is O(n log(n)).
 */


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

console.log(twoNumberSum([9,1,3,4,5], 6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5], 10)) // []