const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }

    let middle = Math.floor(array.length / 2)
    let el = array[middle]
    let less = []
    let bigger = []

    for (let i = 0; i < array.length; i++) {
        if (i === middle) {
            continue
        }

        if (el > array[i]) {
            less.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }

    return [...quickSort(less), el, ...quickSort(bigger)]
}

console.log(quickSort(arr))   // [-5, -1, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 23, 32, 35]