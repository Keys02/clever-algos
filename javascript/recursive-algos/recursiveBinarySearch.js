let recursiveBinarySearch = (haystack, needle, start, end) => {
    if (haystack.length == 0 || start > end) return -1 

    let mid = Math.floor((start + end) / 2)

    if (haystack[mid] == needle) return mid

    return (needle > haystack[mid]) ? recursiveBinarySearch(haystack, needle, mid + 1, end) : recursiveBinarySearch(haystack, needle, start, mid - 1)
}

let list = [1, 2, 4, 5, 6, 8, 10, 12, 15]
console.log(recursiveBinarySearch(list, 15, 0, list.length - 1))