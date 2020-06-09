from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, date
from modulos.medico.models import Medico
from modulos.agenda.models import Agenda, Horario
from .managers import ConsultaManager

class Consulta(models.Model):
  objects = ConsultaManager()
  data_agendamento = models.DateField(null = False, auto_now_add = True)
  desmarcada = models.BooleanField(default = False)
  agenda = models.ForeignKey(Agenda, null = False, on_delete = models.CASCADE)
  horario = models.ForeignKey(Horario, null = True, on_delete = models.SET_NULL)
  usuario = models.ForeignKey(User, null = True, on_delete = models.SET_NULL)

  class Meta:
    ordering = ['agenda__data']
    verbose_name = "Consulta"
    verbose_name_plural = "Consultas"

  def canDelete(self, usuario):
    hoje = date.today()
    if (self.usuario != usuario or self.agenda.data < hoje):
      return False

    return True

  def clean(self):
    if (self._consultaNoPassado()):
      raise ValidationError('A data encontrasse no passado.')
    if (self._consultaIndisponivel()):
      raise ValidationError('Data e hora indisponiveis.')

  def _consultaNoPassado(self):
    hoje = date.today()
    hora_atual = datetime.now().time()
    if ( self.agenda.data < hoje or self.horario < hora_atual ):
      return True

    return False
  
  def _consultaIndisponivel(self):
    consulta = Consulta.objects.find(agenda = self.agenda, horario = self.horario).first()

    return consulta != None