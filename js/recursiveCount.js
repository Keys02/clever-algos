/*--------------------------------------------------------
    Recursive Implementation of the count function
    
    Explanation
    -----------
    The counter is passed as a parameter with zero
    as the default value

    count(array.slice(1)): This part is going to return
    a number 1 after each function call when the array is
    not empty
    1 + count(array.slice(1)): This means when the array is
    not empty the first element is already taken care of

    Takeaway
    --------
    You can pass a variable which will updated during 
    subsequent function calls as arguments when
    implementing recursion

    NB: Always remember recursion keeps track of state

    Demo diagram
    Test case: [1,2,3,4,5]
    Pass 1: 1 + sum([2,3,4,5])
    Pass 2: 1 + 1 + sum([3,4,5])
    Pass 3: 1 + 1 + 1 + sum([4,5])
    Pass 4: 1 + 1 + 1 + 1 + sum([5])
    Pass 4: 1 + 1 + 1 + 1 + 1 + sum([0])
    Pass 4: 1 + 1 + 1 + 1 + 1 + 0



/*-------------------------------------------------------- */

let count = (array) => (array.length === 0) ? 0 : 1 + count(array.slice(1))

console.log(count([1, 2, 3, 4, 10, 1, 12, 13]))