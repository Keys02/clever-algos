/*--------------------------------------------------------
    Recursive Implementation of the sum function
    
    Explanation
    slice(0): This takes two arguments the start
    and end, but when only one argument is passed
    e.g 1 or 2 it removes one or two elements
    respectively starting from the beginning 
    of the array
/*-------------------------------------------------------- */
// ES5 
function sumArrayES5(array) {
    return (array.length === 0) ? 0 : array[0] + sumArrayES5(array.slice(1))
}

// ES6
let sumArrayES6 = (array) => (array.length === 0) ? 0 : array[0] + sumArrayES6(array.slice(1))

console.log(sumArrayES6([1,2,3,4,5]))