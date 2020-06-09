from rest_framework import serializers

from .models import Consulta
from modulos.agenda.serializers import AgendaSerializer

class ConsultaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Consulta
    fields = ['id', 'data_agendamento', 'agenda', 'horario']