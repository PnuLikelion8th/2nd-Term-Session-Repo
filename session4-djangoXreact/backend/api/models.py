from django.db import models

class Blog(models.Model):
    title = models.TextField()
    content = models.TextField()