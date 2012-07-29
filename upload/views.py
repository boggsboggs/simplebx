# Create your views here.
# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext

def filehandler(request):
  return HttpResponse('hello world')

