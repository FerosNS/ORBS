from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def home(request):
    template = loader.get_template('front/home.html')
    context = {
        'title' : 'Welcome to our Worlds',
    }
    return HttpResponse(template.render(context, request))
