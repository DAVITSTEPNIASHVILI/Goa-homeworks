from .serializers import TaskSerializer
from .models import Task
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET','POST'])
def task_view(request):
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
        
        tasks = Task.objects.all()
        all_serializer = TaskSerializer(tasks, many=True)
        return Response(all_serializer.data)

@api_view(['DELETE'])
def delete_task(req, id):
    if req.method == 'DELETE':
        task = Task.objects.get(id=id)
        task.delete()

        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)