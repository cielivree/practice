const arr = [1, 4, 5, 8, 16, 14, 2, 13, 7, 10, 3, 6, 9, 12, 11, 15]

function binarySearch(array, num) {
    let arr = array.sort((a, b) => a - b) // Ascending order

    let start = 0
    let end = arr.length
    let middle
    let found = false
    let result = -1

    while (found === false && start <= end) {
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

function recursiveBinarySearch(array, num, start, end) {
    let middle = Math.floor((start + end) / 2)

    if (num === array[middle]) {
        return middle
    }

    if (num < array[middle]) {
        return recursiveBinarySearch(array, num, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, num, middle + 1, end)
    }
}

console.log(binarySearch(arr, 13)) // 12
console.log(binarySearch(arr, 0)) // -1
console.log(binarySearch(arr, 17)) // -1
console.log(binarySearch(arr, 1)) // 0

console.log(recursiveBinarySearch(arr, 5, 0, arr.length)) // 2