from django.contrib import admin
from mixins.admin import AcoesBasicasMixin

from .models import Medico

@admin.register(Medico)
class MedicoAdmin(admin.ModelAdmin, AcoesBasicasMixin):
  actions_on_bottom = True
  actions_on_top    = False
  fields            = ('nome', 'crm', 'email', 'telefone', 'especialidade')
  list_display      = ('nome', 'crm', 'especialidade', 'email', 'telefone', 'acoesBasicas')
  list_filter       = ['especialidade']
  search_fields     = ['nome', 'crm', 'email']