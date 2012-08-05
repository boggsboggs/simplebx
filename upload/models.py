from django.db import models
from django.forms import ModelForm
# Create your models here.
import base64


class StoredFile(models.Model):
    filename = models.CharField(max_length=100)
    file_data = models.TextField(
            db_column='data',
            blank=True)

    def __unicode__(self):
        return self.filename
