function cacheFunction(fn) {
    const cache = {}

    return function(n) {
        if (cache[n]) {
            return cache[n]  // Pulling from cache 
        }

        let result = fn(n)  // The function calculate
        cache[n] = result
        return result
    }
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

const cacheFactorial = cacheFunction(factorial)

console.log(cacheFactorial(5))  // 120 - The function calculate
console.log(cacheFactorial(4))  // 24 - The function calculate
console.log(cacheFactorial(5))  // 120 - Pulling from cache
console.log(cacheFactorial(4))  // 24 - Pulling from cache