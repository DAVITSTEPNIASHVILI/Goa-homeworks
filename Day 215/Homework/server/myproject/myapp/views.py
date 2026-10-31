from .serializers import TaskSerializer
from .models import Task
from rest_framework.viewsets import ModelViewSet

# Create your views here.
# ModelViewSet -> class based view, რომელსაც გაწერილი აქვს უკვე კონკრეტულ request method ზე რა მოქმედება შეასრულოს
# GET -> წამოიღოს ყველა მონაცემი ბაზიდან
# GET/id (პარამეტრიანი) -> წამოიღოს კონკრეტული 1 პროდუქტი
# POST -> დაამატოს ახალი მონაცემი ბაზაში
# PUT -> ჩაანაცვლოს რაიმე მონაცემი
# PATCH -> შეცვალოს რაიმე მონაცემი
# DELETE/id (პარამეტრიანი) -> წაშალოს რაიმე მონაცემი

# ძალიან გვიმარტივებს საქმეს, რადგან ეს უკვე გამზადებული request response view ია
class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer