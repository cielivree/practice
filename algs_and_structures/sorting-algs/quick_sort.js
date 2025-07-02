const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32]

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }

    let index = Math.floor(array.length / 2)
    let el = array[index]
    let less = []
    let bigger = []

}