def find_maximum(max_num):
    return max(max_num)
find_maximum()

def find_maximum2(max2_num):
    max_arr = max2_num[0]
    for number in max2_num:
        if number > max_arr:
            max_arr = number
    return max_arr

print(find_maximum2([78,39,214,23]))

def sum():

    count = 0
    for i in sum:
        if i > 0:
            count += i ** 2
        
    return count

print(sum([1,2]))