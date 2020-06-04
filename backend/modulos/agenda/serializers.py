from rest_framework import serializers

from .models import Agenda, Horario

class HorarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Horario
    fields = ['horario']

class AgendaSerializer(serializers.ModelSerializer):
  horarios = HorarioSerializer(many = True)

  class Meta:
    model = Agenda
    fields = ['id', 'data', 'medico', 'horarios']