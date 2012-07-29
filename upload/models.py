from django.db import models
from django.forms import ModelForm
# Create your models here.
import base64



class StoredFile(models.Model):
    _title = models.CharField(max_length=100)
    _data = models.TextField(
            db_column='data',
            blank=True)

    def set_data(self, data):
        self._data = data

    def get_data(self):
        return data

    def set_title(self, title):
        self._title = title
    def get_title(self):
        return self._title  


    title = property(get_title, set_title)
    data = property(get_data, set_data)


class FileForm(ModelForm):
  class Meta:
    model = StoredFile