from django.core.management.base import BaseCommand, CommandError
from django.conf import settings
import importlib, inspect
import os
from pathlib import Path

def get_classes(no):
  path_model = 'modulos.' + str(no.name) + '.models'
  modulo = importlib.import_module(path_model)
  members = inspect.getmembers(modulo, inspect.isclass)
  classes = ""
  for name, class_name in members:
    classes += name + ","
  return classes

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def handle(self, *args, **options):
        diretorio = Path(settings.BASE_DIR + '/comomo/modulos/')
        classes = ""
        for no in diretorio.iterdir():
          if no.is_dir() and str(no.name) != '__pycache__':
            classes += get_classes(no)
        classes = classes[:-1]
        self.stdout.write(self.style.SUCCESS('Successfully closed poll' + classes))