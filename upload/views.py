# Create your views here.
# Create your views here.
from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from django.db import models
from django.template import RequestContext

from annoying.decorators import render_to
from upload.models import *
import pickle



def filehandler(request):

  if request.method == 'POST':
    params = request.POST
    newfile = StoredFile()


    pickled_contents = pickle(params.file_data)

    newfile.data = pickled_contents
    newfile.name = params.name

    try:
      newfile.full_clean()  

    except ValidationError as e:
      return HttpResponse(str(e))

    newfile.save()
    return HttpResponse('file saved')

  else:
    raise Http404




