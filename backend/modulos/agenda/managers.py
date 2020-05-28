from django.db import models
from datetime import date

class AgendaManager(models.Manager):
  def get_queryset(self):
    hoje = date.today()
    
    return super().get_queryset().filter(data__lt = hoje)