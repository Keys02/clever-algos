/*--------------------------------------------------------
    Recursive function which finds the maximun number 
    in a list
/*-------------------------------------------------------- */
function findMax(array) {
    if (array.length === 1) return array[0]
    return array[0] > findMax(array.slice(1)) ? array[0] : findMax(array.slice(1))
}

console.log("Maximum number: " + findMax([2,3,5,6]))