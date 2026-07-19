from django.shortcuts import render

# Create your views here.
students_database = [
        {"id": 0, "name": "ნიკა", "age": 15, "grade": 9},
        {"id": 1, "name": "მარიამი", "age": 16, "grade": 10},
        {"id": 2, "name": "გიორგი", "age": 14, "grade": 8},
        {"id": 3, "name": "ანა", "age": 17, "grade": 11},
        {"id": 4, "name": "ლუკა", "age": 15, "grade": 9},
        {"id": 5, "name": "საბა", "age": 16, "grade": 10},
        {"id": 6, "name": "ელენე", "age": 14, "grade": 8},
        {"id": 7, "name": "დათო", "age": 17, "grade": 11},
        {"id": 8, "name": "თამარი", "age": 15, "grade": 9},
        {"id": 9, "name": "ანდრია", "age": 16, "grade": 10}
    ]

def all_students(req):
    return render(req, 'all_student.html', {
        'students': students_database
    })

def student_info(req, id):
    student_info = None

    for student in students_database:
        if int(student["id"]) == int(id):
            student_info = student
    
    return render(req, 'student_info.html', {
        'student': student_info
    })