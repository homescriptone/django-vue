from django.db import models

# Create your models here.
class Notes(models.Model):
    title = models.CharField(max_length=255, unique=True)
    content = models.TextField()
    created_on = models.DateField(auto_now_add=True,auto_created=True)
    
    def __str__(self):
        return self.title
