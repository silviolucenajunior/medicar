from django.db import models

class Especialidade(models.Model):
  nome = models.CharField(max_length = 125, blank = False, null = False)

  def __str__(self):
    return self.nome

  class Meta:
    verbose_name        = 'Especialidade'
    verbose_name_plural = 'Especialidades'

