from django.shortcuts import render

# Create your views here.
def index(request):
    # context = {
    #     'arr' : [1,2,3,4,5]
    # }
    context = {
        'arr' : [
            {
                'name': 'aleksandre',
                'surname': 'dzukaevi',
                'age': 15
            },
            {
                'name': 'davit',
                'surname': 'shavidze',
                'age': 17
            }
        ]
    }
    return render(request, 'index.html', context)