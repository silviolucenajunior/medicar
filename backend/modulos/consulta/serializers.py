from rest_framework import serializers

from .models import Consulta
from modulos.agenda.serializers import AgendaSerializer, HorarioSerializer

class ConsultaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Consulta
    fields = ['id', 'data_agendamento', 'agenda', 'horario']

class ConsultaListSerializer(serializers.ModelSerializer):
  agenda = AgendaSerializer()
  horario = HorarioSerializer()
  
  class Meta:
    model = Consulta
    fields = ['id', 'data_agendamento', 'agenda', 'horario']