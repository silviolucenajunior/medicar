from rest_framework import serializers

from .models import Medico
from modulos.especialidade.serializers import EspecialidadeSerializer

class MedicoSerializer(serializers.ModelSerializer):
  especialidade = EspecialidadeSerializer()
  
  class Meta:
    model = Medico
    fields = ['id', 'nome', 'crm', 'especialidade']