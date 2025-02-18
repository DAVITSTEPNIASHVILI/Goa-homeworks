def remove_one_element(user_list,user_index):
    user_list.pop(user_index)
    print(user_list)
remove_one_element([1,2,3],1)

def square(user_num):
    return user_num * user_num
    
result = square(7)

print(result * 2)


def rectangel_info(side1,side2):
    perimeter = (side1 + side2) *2
    area = side1 * side2
    return perimeter, area

perimeter,area  = rectangel_info(8,9)
print(perimeter)
print(area)