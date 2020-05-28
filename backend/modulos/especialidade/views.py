from rest_framework import viewsets
from rest_framework import permissions

from .models import Especialidade
from .serializers import EspecialidadeSerializer

class EspecialidadeViewSet(viewsets.ModelViewSet):
  queryset = Especialidade.objects.all()
  serializer_class = EspecialidadeSerializer
  permission_classes = [permissions.IsAuthenticated]
  search_fields = ['nome']