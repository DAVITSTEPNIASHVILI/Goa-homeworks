from django import forms

class RegisterForm(forms.Form):
    first_name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'input-name'
    }))
    last_name = forms.CharField()
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'style': 'color: blue;'
    }))
    age = forms.IntegerField()
    password = forms.CharField(widget=forms.PasswordInput())
    phone = forms.IntegerField()


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput())

class ProductForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'product-name'
    }))
    price = forms.IntegerField()
    quantity = forms.IntegerField()
    description = forms.CharField()
    category = forms.CharField()

class StudentForm(forms.Form):
    name = forms.CharField()
    surname = forms.CharField()
    email = forms.EmailField(widget=forms.EmailInput())
    age = forms.IntegerField()