function findMax(array) {
    if (array.length === 1) return array[0]

    return array[0] > findMax(array.slice(1)) ? array[0] : findMax(array.slice(1))
}

console.log(findMax([2,3,5,6]))