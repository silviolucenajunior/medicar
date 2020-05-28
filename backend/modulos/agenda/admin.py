from django.contrib import admin

from mixins.admin import AcoesBasicasMixin
from .models import Agenda, Horario
from .forms import AgendaForm

class HorarioInline(admin.StackedInline):
  model = Horario

@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin, AcoesBasicasMixin):
  actions_on_bottom = True
  actions_on_top    = False
  form              = AgendaForm
  inlines           = [ HorarioInline ]
  list_display      = ('data', 'medico', 'acoesBasicas')
  list_filter       = ['medico', 'medico__especialidade']
  search_fields     = ['medico__nome']