FROM python:3.9-slim-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /postcard

COPY . .

RUN pip install -r requirements.txt

CMD python manage.py runserver 0.0.0.0:8000
