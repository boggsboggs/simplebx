from django.db import models


class StoredFile(models.Model):
    filename = models.CharField(max_length=100, unique=True)
    file_data = models.TextField(
            db_column='data',
            blank=True)
    is_encrypted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_downloaded = models.DateField(auto_now=True)

    def __unicode__(self):
        return self.filename
