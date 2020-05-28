from django.urls import reverse
from django.utils.html import format_html

class AcoesBasicasMixin(object):

  def acoesBasicas(self, obj):
    change_url = reverse('admin:{}_{}_change'.format(obj._meta.app_label, obj._meta.model_name), args=[obj.id])
    delete_url = reverse('admin:{}_{}_delete'.format(obj._meta.app_label, obj._meta.model_name), args=[obj.id])
    return format_html('<a class="fa fa-edit btn btn-primary" href="{}" style="margin-right: 12px; color: white;"><i class="material-icons">edit</i></a><a class="fa fa-remove btn btn-danger" href="{}" style="color: white;"><i class="material-icons">remove_circle</i></a>'.format(change_url, delete_url))

  acoesBasicas.short_description = u'Ações'
  acoesBasicas.allow_tags = True