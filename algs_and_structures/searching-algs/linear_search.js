const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]

function linearSearch(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 11)) // 10