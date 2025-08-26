def binary_search(haystack, needle, low, high)
  # Base case
  return -1 if (low > high)

  mid = ((low + high) / 2).floor

  return mid if needle == haystack[mid]

  # Recursive case
  return needle > haystack[mid] ? binary_search(haystack, needle, mid + 1, high) : binary_search(haystack, needle, low, mid - 1)
end

my_list = [1,2,6,7,8,9,10]
puts binary_search(my_list, 10, 0, my_list.length - 1)

