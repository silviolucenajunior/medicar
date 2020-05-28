# COMOMO

Sistema de Controle e Monitoramento de Veiculos

# Requisitos
 - docker
 - docker-compose
 - sonar-scanner (opcional)
 
# Stack
- Python/Django
- Gunicorn
- Nginx
- MySQL

# Rodando o projeto em desenvolvimento

  - Importar o projeto
  - Subir o projeto com composer
  ```
  docker-compose up --build
  ```
- Instalar as migrations
 ```
  docker exec -it comomo_web_1 python src/manage.py migrate
  ```
- Coletar os arquivos staticos
```
  docker exec -it comomo_web_1 python src/manage.py collectstatic
  ```
- Criar superusuario
```
  docker exec -it comomo_web_1 python src/manage.py createsuperuser
  ```
- Acessar o sistema em 127.0.0.1:8081