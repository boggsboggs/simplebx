from django.db import models
from django.forms import ModelForm
# Create your models here.
import base64



class StoredFile(models.Model):
    _name = models.CharField(max_length=100)
    _data = models.TextField(
            db_column='data',
            blank=True)

    def set_data(self, data):
        self._data = data

    def get_data(self):
        return data

    def set_name(self, name):
        self._name = name
    def get_name(self):
        return self._name  


    name = property(get_name, set_name)
    data = property(get_data, set_data)

