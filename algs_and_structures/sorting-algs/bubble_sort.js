const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

console.log(bubbleSort(arr))  // [-5, -1, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 23, 32, 35]