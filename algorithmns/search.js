const arr = [1,2,3,4,5,6,7,8,9,10]

const search = num => {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) return i
    }
    return -1
}

console.log(search(6)) // 5
console.log(search(11)) // -1