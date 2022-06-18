const arr = [1,2,3,4,5,6,7,8,9,10]

const search = num => {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) return i
    }
    return -1
}

console.log(search(6)) // 5
console.log(search(11)) // -1

/**
 * As the array isn’t ordered,
 *  we don’t have a way of knowing the approximate position of each value, 
 * so the best we can do is check one value at a time. 
 * The complexity of this algorithm is linear - O(n) since in 
 * the worst case scenario we will have to iterate over the whole array once to 
 * get the value we’re looking for.

Linear search is the approach used by many built-in JavaScript methods like indexOf, 
includes, and findIndex.
 */