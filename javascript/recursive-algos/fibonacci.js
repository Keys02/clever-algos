/*--------------------------------------------------------
    A recursive fibonacci function
/*-------------------------------------------------------- */
function fib(n) {
    if (n < 2) return n
    return fib(n-1) + fib(n-2)
}

function fibList(n) {
    if (n == 0) return [];
    else if (n == 1) return [0]
    else if (n == 2) return [0, 1]
    
    let fibSeq = [0, 1]
    while (n != fibSeq.length) fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])

    return fibSeq
}

console.log(fibList(5))