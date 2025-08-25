/*--------------------------------------------------------
    Recursive Implementation of the count function
    
    Explanation
    The counter is passed as a parameter with zero
    as the default value

    Takeaway
    You can pass a variable which will updated during 
    subsequent function calls as arguments when
    implementing recursion
/*-------------------------------------------------------- */

let count = (array, counter = 0) => { 
    if (array.length === 0) return 0 
    
    if (array[0]) {
        counter++
        return counter + count(array.slice(1))
    }
}

console.log(count([1,2,3,4]))