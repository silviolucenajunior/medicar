from django.db import models
from modulos.especialidade.models import Especialidade

class Medico(models.Model):
  nome = models.CharField(max_length = 255, blank = False, null = False)
  crm = models.IntegerField(verbose_name = "CRM", blank = False, null = False)
  telefone = models.CharField(max_length = 24, blank = True, null = True)
  email = models.EmailField(blank = True, null = True)
  especialidade = models.ForeignKey(Especialidade, on_delete = models.SET_NULL, blank = True, null = True)

  def __str__(self):
    return self.nome

  class Meta:
    verbose_name = 'Medico'
    verbose_name_plural = 'Medicos'