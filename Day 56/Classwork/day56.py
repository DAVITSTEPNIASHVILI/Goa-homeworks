# Sum Mixed Array
def sum_mix(arr):
    result = 0
    for i in arr: result += int(i)
    return result
# Sum without highest and lowest number
def sum_array(arr):
    if arr == None or arr == []: return 0
    
    arr.sort()
    return sum(arr[1:-1])
# Grasshopper - Messi goals function
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague
# Double Char
def double_char(s):
    res = ""
    for i in s:
        res += i*2
    return res
# Parse nice int from char problem
def get_age(age):
    return int(age[0])

# საკლასო დავალება
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]