from rest_framework import serializers

from .models import Agenda

class AgendaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Agenda
    fields = ['id', 'data', 'medico', 'horarios']