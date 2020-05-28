from django import forms
from datetime import date

from .models import Agenda

class AgendaForm(forms.ModelForm):
  class Meta:
    model = Agenda
    fields = ('data', 'medico')

  def clean(self):
    data = self.cleaned_data.get('data')
    medico = self.cleaned_data.get('medico')
    
    if self.isDataPassado(data):
      raise forms.ValidationError("A data não pode ser inferior ao dia atual.")
    if self.isDataJaCadastradaParaOMedico(data, medico):
      raise forms.ValidationError("Já existe uma agenda para este médico no dia informado.")
    return self.cleaned_data

  def isDataPassado(self, data):
    hoje = date.today()
    return data < hoje

  def isDataJaCadastradaParaOMedico(self, data, medico):
    return Agenda.objects.exclude(id = self.instance.id).filter(data = data, medico = medico).count() > 0