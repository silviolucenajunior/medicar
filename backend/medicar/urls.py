"""comomo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers

from django.contrib.auth import views as auth_views
from django.contrib.auth import urls as auth_urls

from modulos.especialidade.views import EspecialidadeViewSet
from modulos.agenda.views import AgendaViewSet


admin.site.site_header = "COMOMO"
admin.site.site_title = "COMOMO"
admin.site.index_title = "COMOMO"

router = routers.DefaultRouter()
router.register(r'especialidades', EspecialidadeViewSet)
router.register(r'agenda', AgendaViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('password-reset/', auth_views.PasswordResetView.as_view(), name='admin_password_reset'),


    path('', admin.site.urls),
    path('', include(auth_urls))

]