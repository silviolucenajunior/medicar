from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from modulos.medico.models import Medico
from modulos.agenda.models import Agenda, Horario
from .managers import ConsultaManager

class Consulta(models.Model):
  objects = ConsultaManager()
  data_agendamento = models.DateField(null = False, auto_now_add = True)
  dia = models.ForeignKey(Agenda, null = False, on_delete = models.CASCADE)
  horario = models.ForeignKey(Horario, null = True, on_delete = models.SET_NULL)
  Medico = models.ForeignKey(Medico, null = False, on_delete = models.CASCADE)
  usuario = models.ForeignKey(User, null = False, on_delete = models.CASCADE)

  class Meta:
    ordering = ['dia__data']
    verbose_name = "Consulta"
    verbose_name_plural = "Consultas"