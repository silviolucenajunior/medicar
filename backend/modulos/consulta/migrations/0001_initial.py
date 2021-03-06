# Generated by Django 3.0.6 on 2020-06-02 20:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('medico', '0002_auto_20200527_2003'),
        ('agenda', '0003_auto_20200528_1701'),
    ]

    operations = [
        migrations.CreateModel(
            name='Consulta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_agendamento', models.DateField(auto_now_add=True)),
                ('desmarcada', models.BooleanField(default=False)),
                ('Medico', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='medico.Medico')),
                ('dia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='agenda.Agenda')),
                ('horario', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='agenda.Horario')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Consulta',
                'verbose_name_plural': 'Consultas',
                'ordering': ['dia__data'],
            },
        ),
    ]
