from django.db import models
from datetime import datetime
from modulos.medico.models import Medico
from .managers import AgendaManager

class Agenda(models.Model):
  objects = AgendaManager()
  medico = models.ForeignKey(Medico, on_delete = models.CASCADE)
  data = models.DateField()

  class Meta:
    ordering = ['data']
    verbose_name = "Agenda"
    verbose_name_plural = "Agendas"

  def getPrimeiroHorario(self):
    hora_atual = datetime.now().time()

    return self.horarios.filter(horario__gt = hora_atual).first()

class Horario(models.Model):
  agenda = models.ForeignKey(Agenda, on_delete = models.CASCADE, related_name = "horarios")
  horario = models.TimeField()

  def __str__(self):
    return self.horario.strftime('%H:%M')