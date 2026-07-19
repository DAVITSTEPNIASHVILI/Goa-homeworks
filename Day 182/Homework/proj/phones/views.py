from django.shortcuts import render, redirect
from phones.models import Phone

# Create your views here.
def all_phones(req):
    context = {
        'all_phones': Phone.objects.all()
    }
    return render(req, 'all_phones.html', context)

def phone_details(req, id):
    found_phone = Phone.objects.get(id=id)
    context = {
        'phone': found_phone
    }
    return render(req, 'phone_detail.html', context)

def delete_phone(req, id):
    found_phone = Phone.objects.get(id=id)
    found_phone.delete()
    return redirect('all_phones')