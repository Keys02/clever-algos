/*--------------------------------------------------------
    A recursive fibonacci function
/*-------------------------------------------------------- */
function fib(n) {
    if (n < 2) return n
    return fib(n-1) + fib(n-2)
}

function fibList(n) {
    let fibSeq = [0, 1]

    while(n != fibSeq.length) fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])

    return fibSeq
}

console.log(fibList(10))