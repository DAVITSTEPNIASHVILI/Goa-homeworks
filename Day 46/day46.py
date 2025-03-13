tapel1 = (1,2,3,4,5)
print(min(tapel1))
print(max(tapel1))
print(tapel1.count(tapel1[0]))


def no_duplicates(user_list):
    user_list = list(set(user_list))

    return user_list
print(no_duplicates([1,2,3,1,2]))
print(no_duplicates([12,12,22,23]))
print(no_duplicates([98,98,23]))