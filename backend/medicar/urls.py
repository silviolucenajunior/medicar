from django.conf.urls import url
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from django.contrib.auth import views as auth_views
from django.contrib.auth import urls as auth_urls

from modulos.especialidade.views import EspecialidadeViewSet
from modulos.agenda.views import AgendaViewSet
from modulos.medico.views import MedicoViewSet
from modulos.consulta.views import ConsultaViewSet

router = routers.DefaultRouter()
router.register(r'especialidades', EspecialidadeViewSet)
router.register(r'agenda', AgendaViewSet)
router.register(r'medico', MedicoViewSet)
router.register(r'consulta', ConsultaViewSet)

urlpatterns = [
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.authtoken')),
    path('api/', include(router.urls)),

    path('', admin.site.urls),
    path('', include(auth_urls))
]