from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import Consulta
from modulos.agenda.models import Agenda
from .serializers import ConsultaSerializer, ConsultaListSerializer

class ConsultaViewSet(viewsets.ModelViewSet):
  queryset = Consulta.objects.all()
  serializer_class = ConsultaSerializer
  permission_classes = [permissions.IsAuthenticated]

  def get_queryset(self):
    return Consulta.objects.filter(usuario = self.request.user).all()

  def get_serializer_class(self):
    if self.action == 'list':
      return ConsultaListSerializer

    return ConsultaSerializer

  def perform_create(self, serializer):
    serializer.save(usuario = self.request.user)

  # def destroy(self, request, *args, **kwargs):
  #     consulta = self.get_object()
  #     if (consulta.canDelete(request.user)) :
  #       consulta.desmarcada = True
  #       consulta.save()

  #       return Response()
  #     return Response(data = 'Você não pode cancelar esta consulta.')