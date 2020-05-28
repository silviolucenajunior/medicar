from rest_framework import viewsets
from rest_framework import permissions

from .models import Agenda
from .serializers import AgendaSerializer

class AgendaViewSet(viewsets.ModelViewSet):
  queryset = Agenda.objects.all()
  serializer_class = AgendaSerializer
  #permission_classes = [permissions.IsAuthenticated]