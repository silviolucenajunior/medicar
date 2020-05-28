from rest_framework import serializers

from .models import Especialidade

class EspecialidadeSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Especialidade
    fields = ['id', 'nome']