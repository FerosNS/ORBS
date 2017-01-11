from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Home render
def home(request):
    page = loader.get_template('front/views/home.html')
    context = {
        'title' : 'Welcome to our Worlds',
        'background' : ''
    }
    return HttpResponse(page.render(context, request))
'''
    Helper function that combines a layout and a specified page
    @param {String} layout  - The html file that you want to display as the base page
    @param {String} page    - The html file that you want to display the content in
'''
def layout_page_merge(layout, page, request, context = None, page_context = None):
    l = loader.get_template(layout)
    p = loader.get_template(page)
    if context is not None:
        c = {
            'title' : context['title'],
            'content' : p.render(page_context if page_context is not None else '')
        }
    else:
        c = context
    return HttpResponse(l.render(c, request))
