from .models import Todo

def get_all_todos():
    return Todo.objects.all()

def add_todo(req_post):
    Todo(text=req_post.get('text')).save()

def delete_todo(id):
    Todo.objects.get(id=id).delete()