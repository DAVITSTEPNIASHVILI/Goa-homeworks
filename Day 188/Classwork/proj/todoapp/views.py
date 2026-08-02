from django.shortcuts import render, redirect
from .models import Todo
# Create your views here.
def main(req):
    context = {
        'texts': Todo.objects.all(),
        'text': None
    }
    try:
        if req.method == 'POST':
            text = req.POST.get('text')

            added_text = Todo(text=text)
            added_text.save()
            context['text'] = added_text
    except:
        context['text'] = ''
        return redirect('all_text')
    return render(req, 'todo.html', context)

def delete(req, id):
    text = Todo.objects.get(id=id)
    text.delete()
    return redirect('all_text')