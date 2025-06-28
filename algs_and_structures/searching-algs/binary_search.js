const array = [1, 4, 5, 8, 16, 14, 2, 13, 7, 10, 3, 6, 9, 12, 11, 15]

function binarySearch(array, num) {
    let arr = array.sort((a, b) => a - b)
    let count = 0

    let start = 0
    let end = arr.length
    let middle
    let found = false
    let result = -1

    while (found === false && start <= end) {
        count++
        middle = Math.floor((start + end) / 2)

        if (num > arr[middle]) {
            start = middle + 1
        } else {
            end = middle - 1 
        }

        if (arr[middle] === num) {
            result = middle
            found = true
            return result
        }
    }

    return result

}

console.log(binarySearch(array, 13)) // 12
console.log(binarySearch(array, 0)) // -1
console.log(binarySearch(array, 17)) // -1
console.log(binarySearch(array, 1)) // 0