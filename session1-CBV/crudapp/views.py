from django.shortcuts import render
from django.views.generic.list import ListView
from .models import Letter
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, DeleteView
from django.urls import reverse_lazy

class LetterListView(ListView):
    model = Letter
    template_name = "index.html"
    context_object_name = "letters"

class LetterDetailView(DetailView):
    model = Letter
    template_name = "detail.html"
    context_object_name = "letter_object"

class LetterCreateView(CreateView):
    model = Letter
    fields = '__all__'
    template_name = "create.html"
    success_url = reverse_lazy('index')

class LetterDeleteView(DeleteView):
    model = Letter
    success_url = reverse_lazy('index')

    def get(self, *args, **kwargs):
        return self.post(*args, **kwargs)
