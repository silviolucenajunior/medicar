from rest_framework import serializers

from .models import Agenda, Horario
from modulos.medico.serializers import MedicoSerializer

class HorarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Horario
    fields = ['id', 'horario']

class AgendaSerializer(serializers.ModelSerializer):
  horarios = HorarioSerializer(many = True)

  class Meta:
    model = Agenda
    fields = ['id', 'data', 'medico', 'horarios']