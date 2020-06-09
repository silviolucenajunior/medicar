# Generated by Django 3.0.6 on 2020-06-08 04:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('consulta', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='consulta',
            options={'ordering': ['agenda__data'], 'verbose_name': 'Consulta', 'verbose_name_plural': 'Consultas'},
        ),
        migrations.RenameField(
            model_name='consulta',
            old_name='dia',
            new_name='agenda',
        ),
        migrations.RemoveField(
            model_name='consulta',
            name='Medico',
        ),
        migrations.RemoveField(
            model_name='consulta',
            name='usuario',
        ),
    ]