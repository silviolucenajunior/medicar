from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import Consulta
from .serializers import ConsultaSerializer

class ConsultaViewSet(viewsets.ModelViewSet):
  queryset = Consulta.objects.all()
  serializer_class = ConsultaSerializer
  permission_classes = [permissions.IsAuthenticated]

  def destroy(self, request, *args, **kwargs):
      consulta = self.get_object()
      if (consulta.canDelete(request.user)) :
        consulta.desmarcada = True
        consulta.save()

        return Response()
      return Response(data = 'Você não pode cancelar esta consulta.')