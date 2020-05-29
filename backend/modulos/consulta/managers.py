from django.db import models
from datetime import date

class ConsultaManager(models.Manager):
  def get_queryset(self):
    hoje = date.today()
    
    return super().get_queryset().filter(dia__data__lt = hoje, desmarcada = False)