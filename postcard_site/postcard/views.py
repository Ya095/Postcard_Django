from django.shortcuts import render, redirect
from .forms import *
from .models import *


menu = [
    {"title": "Создание открытки", "url_name": "create_image"},
    {"title": "Сохраненные открытки", "url_name": "saved_postcard"},
]


def create_image(request):
    if request.method == 'POST':
        form = AddPostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('form_success')
    else:
        form = AddPostForm()

    data = {
        "form": form,
        "menu": menu,
        "title": "Главная страница"
    }
    return render(request, 'postcard/create_postcard.html', data)


def form_success(request):
    return render(request, 'postcard/form_success.html', {"menu": menu, "title": "Страница успеха"})


def saved_postcard(request):
    postcards = Postcard.objects.all()

    data = {
        "menu": menu,
        "title": "Сохраненное",
        "postcards": postcards,
    }
    return render(request, "postcard/saved_postcard.html", data)
