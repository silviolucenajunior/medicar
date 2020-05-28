from django.contrib import admin

from mixins.admin import AcoesBasicasMixin
from .models import Especialidade

@admin.register(Especialidade)
class EspecialidadeAdmin(admin.ModelAdmin, AcoesBasicasMixin):
  actions_on_bottom = True
  actions_on_top    = False
  fields            = ['nome']
  list_display      = ('nome', 'acoesBasicas')
  search_fields     = ['nome']