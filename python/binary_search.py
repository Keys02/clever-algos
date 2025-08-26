def binary_search(haystack, needle, start, end):
    # -------------
    # Base case  
    # --------------
    if start > end:
        return -1
    # Finding middle value
    mid = (start + end) // 2
    # Rite of passage
    if haystack[mid] == needle:
        return mid
    
    # ---------------
    # Recursive case  
    # ---------------
    if needle > haystack[mid]:
        return binary_search(haystack, needle, mid+1, end)
    if needle < haystack[mid]:
        return binary_search(haystack, needle, start, mid-1)
    
my_list = [1,2,3,4]

print(binary_search(my_list, 0, 0, len(my_list)-1))