function cacheFunction(fn) {

}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }

    return result
}

// console.log(factorial(5)) - 120 