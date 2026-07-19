from django.shortcuts import render

# Create your views here.
goa_database = [
    {"id": 0, "mentor": "davit janezashvili", "student_count": 5},
    {"id": 1, "mentor": "nino beridze", "student_count": 12},
    {"id": 2, "mentor": "giorgi makharashvili", "student_count": 8},
    {"id": 3, "mentor": "salome kacharava", "student_count": 15},
    {"id": 4, "mentor": "luka gorgadze", "student_count": 10},
    {"id": 5, "mentor": "mariam kvekveskiri", "student_count": 7},
    {"id": 6, "mentor": "irakli tsintsadze", "student_count": 9},
    {"id": 7, "mentor": "ana gvenetadze", "student_count": 14},
    {"id": 8, "mentor": "saba lomidze", "student_count": 6},
    {"id": 9, "mentor": "eka jincharadze", "student_count": 11},
    {"id": 10, "mentor": "giorgi chagelishvili", "student_count": 13},
    {"id": 11, "mentor": "tamar modebadze", "student_count": 4},
    {"id": 12, "mentor": "levan kvaratskhelia", "student_count": 18},
    {"id": 13, "mentor": "nino gelashvili", "student_count": 9},
    {"id": 14, "mentor": "zuka mumladze", "student_count": 7},
    {"id": 15, "mentor": "salome tavartkiladze", "student_count": 16},
    {"id": 16, "mentor": "davit kheladze", "student_count": 5},
    {"id": 17, "mentor": "mariam bardavelidze", "student_count": 10},
    {"id": 18, "mentor": "irakli asatiani", "student_count": 12},
    {"id": 19, "mentor": "ana tsiklauri", "student_count": 8}
]

def all_groups(req):
    return render(req, 'all_groups.html', {
        'groups': goa_database
    })

def group_info(req, id):
    group_info = None

    for group in goa_database:
        if group["id"] == id:
            group_info = group

    return render(req, 'group_info.html', {
        'group': group_info
    })