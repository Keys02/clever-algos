def binary_search(haystack, needle):
    low = 0
    high = len(haystack) - 1

    while low <= high:
        mid = (low + high) // 2

        guess = haystack[mid]

        if guess > needle:
            high = mid - 1
        elif guess < needle:
            low = mid + 1
        else:
            return mid
    return None;

print(binary_search([1, 3, 8, 9, 20], 20))