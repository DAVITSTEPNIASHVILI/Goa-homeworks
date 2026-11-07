from rest_framework import serializers
from .models import Task

# serializer -> გევხმარება იმაში რომ პითონის ობიექტი გარდავქმნათ ჯავასკრიპტის ობიექტად
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        read_only_fields = ['task_owner']