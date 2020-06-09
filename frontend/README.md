# MEDICAR

Desafio: Medicar
Sistema para gestão de consultas em uma clínica médica

# Requisitos
 - docker
 - docker-compose
 - ng-cli
 
# Stack
- Python/Django
- Angular

# Rodando o projeto em desenvolvimento [Backend]

  - Na raiz do repositorio
  - Subir o projeto com composer
  ```
  docker-compose up --build
  ```
- Instalar as migrations
 ```
  docker exec -it medicar_admin_1 python src/manage.py migrate
  ```
- Criar superusuario
```
  docker exec -it medicar_admin_1 python src/manage.py createsuperuser
  ```
- Acessar o sistema em 127.0.0.1:8081

# Rodando o projeto em desenvolvimento [Frontend]

  - No diretorio frontend
  - npm install
  - ng serve