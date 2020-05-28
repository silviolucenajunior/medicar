FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN apt-get update -y && apt-get upgrade -y && apt-get install -y graphviz libgraphviz-dev pkg-config
RUN pip install --upgrade pip
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/