from rest_framework import serializers
from vuenote.models import Notes
 
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = "__all__"