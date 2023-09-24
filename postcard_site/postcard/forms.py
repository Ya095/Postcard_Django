from django import forms
from .models import *


class AddPostForm(forms.ModelForm):
    class Meta:
        model = Postcard
        fields = "__all__"
        exclude = ['is_favourite']
        widgets = {
            'colour': forms.TextInput(attrs={'type': 'color'}),
            'description': forms.Textarea(attrs={'cols': 30, 'rows': 10}),
        }
