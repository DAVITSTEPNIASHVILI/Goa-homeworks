from django.shortcuts import render

# Create your views here.
def all_users(req):
    user_database = [
        {  
            'id': 0,
            'username': 'aleksandre',
            'email': 'hnjsdcj@gmail.com'
        },
        {
            'id': 1,
            'username': 'daviti',
            'email': 'blablabla@gmail.com'
        }
    ]

    return render(req, 'all_users.html', {
        'users': user_database
    })

def user_details(req, id):
    user_database = [
        {  
            'id': 0,
            'username': 'aleksandre',
            'email': 'hnjsdcj@gmail.com'
        },
        {
            'id': 1,
            'username': 'daviti',
            'email': 'blablabla@gmail.com'
        }
    ]

    user_info = None

    for user in user_database:
        if user["id"] == id:
            user_info = user

    return render(req, 'user_details.html', {
        'user': user_info
    })