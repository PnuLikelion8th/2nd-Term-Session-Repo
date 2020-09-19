from django.db import models

class Letter(models.Model):
    
    class Meta:
        verbose_name = "편지"
        verbose_name_plural = "편지들"
        
    title = models.CharField('제목', max_length=100)
    sender = models.CharField('발신자', max_length=100)
    content = models.TextField('편지 내용')

    def __str__(self):
        return self.title