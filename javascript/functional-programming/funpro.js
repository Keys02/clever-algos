// These functions comes shipped with most functional programming languages
// Get the length of an array 
function length(array) {
    return array.length 
}

// Get the first element in an array
function head(array) {
    return array[0]
}

// Get the rest of the array when the first element is removed
function tail(array) {
    return array.slice(1)
}

function concat(array1, array2) {
   return array1.concat(array2)
}

/*************************
 *  Array filter function 
 *************************/
function filter(callback, array) {
   // Base case
   if (length(array) === 0) return []

   // Recursive case
    const filteredFirstElem = callback(head(array)) ? [head(array)] : []
    return concat(filteredFirstElem, filter(callback, tail(array)))
}

/***********************
 *  Array map function 
 ***********************/
function map(callback, array) {
    // Base case
    if (length(array) === 0) return []

    // Recursive case
    return concat([callback(head(array))], map(callback, tail(array)))
}

/***************************
 *  Array reduce function 
 ***************************/
function reduce(callback, array) {
    // Base case
    if (length(array) === 0) return 0 

    // Recursive case
    const reducedFirstElement = callback(0, head(array)) 
    return reducedFirstElement + reduce(callback, tail(array))
}

function reduceWithAnyReducer(callback, accumulator, array) {
    // Base case
    if (length(array) === 0) return accumulator 

    // Recursive case
    const reducedFirstElement = callback(accumulator, head(array))
    return reduceWithAnyReducer(callback, reducedFirstElement, tail(array))
}

let list = [2,3,5,8,2, 10, 100]

let filteredArray = filter(elem => elem % 2 === 0, list)
let mappedArray = map(elem => elem ** 2, list)
let reducedArray = reduce((accumulator, elem) => accumulator + elem, list)
let sumReducer = (array) => {
    return reduceWithAnyReducer(
        (accumulator, elem) =>  accumulator + elem,
        0,
        array
    )
}
let maxReducer = (array) => {
    return reduceWithAnyReducer(
        (accumulator, elem) => accumulator < elem ? elem : accumulator,
        array[0],
        array
    )
}

console.log(filteredArray)
console.log(mappedArray)
console.log(reducedArray)
console.log(sumReducer(list))
console.log(maxReducer(list))