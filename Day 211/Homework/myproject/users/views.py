from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login


# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            return render(request, 'register.html', {
                'register_form': form
            }) 
    return render(request, 'register.html', {
        'register_form': UserCreationForm()
    })

def login_user(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data = request.POST)
        if form.is_valid():
            login(request, form.get_user())
        else:
            return render(request, 'login.html', {
                'login_form': form
            })
    return render(request, 'login.html', {
        'login_form': AuthenticationForm()
    })