/*--------------------------------------------------------
    A recursive fibonacci function
/*-------------------------------------------------------- */
function fib(n) {
    if (n < 2) return n
    return fib(n-1) + fib(n-2)
}

function fibList(n) {
    if (n === 1) return [0, 1]
    const arr = fibList(n-1)
    return [...arr, arr[n-1] + arr[n-2]]
}

console.log(fibList(4))