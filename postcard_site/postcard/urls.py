from django.urls import path
from . import views


urlpatterns = [
    path("", views.create_image, name='create_image'),
    path("saved/", views.saved_postcard, name="saved_postcard"),
    path("success/", views.form_success, name='form_success')
]