# Generated by Django 3.0.5 on 2020-05-27 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medico', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medico',
            name='crm',
            field=models.IntegerField(verbose_name='CRM'),
        ),
        migrations.AlterField(
            model_name='medico',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]
