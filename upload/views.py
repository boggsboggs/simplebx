# Create your views here.
# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext
from urls.models import *
import pickle

def filehandler(request):

  if request.method == 'POST':
    params = request.POST
    newfile = StoredFile()


    pickled_contents = pickle(params.file_data)

    newfile.data = pickled_contents
    newfile.name = params.name

    
  return HttpResponse('hello world')

