from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def home(request):
    page = loader.get_template('views/home.html')
    context = {
        "title" : 'Welcome to our Worlds',
        "background": 'img/header_img.jpg'
    }
    return HttpResponse(page.render(context, request))

def registration(request):
    page = loader.get_template('views/registration.html')
    context = {
        "title" : 'User Registration',
        "background": 'img/header_img.jpg'
    }
    return HttpResponse(page.render(context, request))

def signup(request):
    page = loader.get_template('views/signup.html')
    context = {
        "title" : 'User Signup',
        "background": 'img/header_img.jpg'
    }
    return HttpResponse(page.render(context, request))
