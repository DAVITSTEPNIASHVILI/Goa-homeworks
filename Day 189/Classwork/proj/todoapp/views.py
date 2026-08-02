from django.shortcuts import render, redirect
from .models import Todo
from .utils import get_all_todos, add_todo, delete_todo
# Create your views here.
def main(req):
    context = {
        'texts': get_all_todos(),
    }
    try:
        if req.method == 'POST':
            add_todo(req.POST)
    except:
        return redirect('all_text')
    return render(req, 'todo.html', context)

def delete(req, id):
    delete_todo(id)
    return redirect('all_text')