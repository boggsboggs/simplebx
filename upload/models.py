from django.db import models

# Create your models here.
import base64



class StoredFile(models.Model):
    _title = models.CharField(max_length=100)
    _data = models.TextField(
            db_column='data',
            blank=True)

    def set_data(self, data):
        self._data = base64.encodestring(data)

    def get_data(self):
        return base64.decodestring(self._data)

    def set_title(self, title):
        self._title = title
    def get_title(self):
        return self._title  

    data = property(get_data, set_data)