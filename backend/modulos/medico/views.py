from rest_framework import viewsets
from rest_framework import permissions

from .models import Medico
from .serializers import MedicoSerializer

class MedicoViewSet(viewsets.ModelViewSet):
  queryset = Medico.objects.all()
  serializer_class = MedicoSerializer
  permission_classes = [permissions.IsAuthenticated]
  search_fields = ['nome', 'especialidade']
  filter_fields = ['especialidade']