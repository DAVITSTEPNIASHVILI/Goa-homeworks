# How good are you really?
def better_than_average(class_points, your_points):
    average_score = (sum(class_points) + your_points) / (len(class_points) + 1)
    return your_points > average_score
# Count of positives / sum of negatives
def count_positives_sum_negatives(arr):
    if arr == [] or arr == None: return []
    count_of_pos = 0
    sum_of_neg = 0
    for i in arr:
        if i > 0: count_of_pos += 1
        else: sum_of_neg += i
    return [count_of_pos, sum_of_neg]
# DNA to RNA Conversion
def dna_to_rna(dna):
    return dna.replace("T", "U")
# bmi
def bmi(weight, height):
    res = weight / height ** 2
    
    if res <= 18.5: return "Underweight"
    elif res <= 25.0: return "Normal"
    elif res <= 30.0: return "Overweight"
    return "Obese"
