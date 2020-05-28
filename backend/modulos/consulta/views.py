from rest_framework import viewsets
from rest_framework import permissions

from .models import Consulta
from .serializers import ConsultaSerializer

class ConsultaViewSet(viewsets.ModelViewSet):
  queryset = Consulta.objects.all()
  serializer_class = ConsultaSerializer
  permission_classes = [permissions.IsAuthenticated]