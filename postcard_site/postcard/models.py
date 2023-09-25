from django.db import models


align_text = (
    ('left', 'left'),
    ('center', 'center'),
    ('right', 'right'),
)

font_text = (
    ('Arial', 'Arial'),
    ('Times New Roman', 'Times New Roman'),
    ('Courier New', 'Courier New'),
)


class Postcard(models.Model):
    image = models.ImageField(upload_to="images/%Y/%m/%d/")
    title = models.CharField(max_length=50, blank=True)
    title_align = models.CharField(max_length=255, choices=align_text, default='left')
    title_font = models.CharField(max_length=255, choices=font_text, default='Arial')
    description = models.TextField(max_length=220, blank=True)
    description_align = models.CharField(max_length=255, choices=align_text, default='left')
    description_font = models.CharField(max_length=255, choices=font_text, default='Arial')
    colour = models.CharField(max_length=20)
    # is_favourite = models.BooleanField(default=False)

    objects = models.Manager()
