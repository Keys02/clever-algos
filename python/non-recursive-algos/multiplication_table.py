my_array = [2, 3, 7, 8, 10]

for i in my_array:
    print("|", end="")
    for j in my_array:
        print(i * j, end="|")
    print()