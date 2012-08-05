# Create your views here.
from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext
import json
from upload import models

def search(request):
  return render_to_response('search.html', {},  context_instance=RequestContext(request))


def query(request):
    if 'serachEntry' in request.GET:
        search_entry = request.GET['searchEntry']
        stored_files = models.StoredFile.objects.filter(filename__istartswith=search_entry)
        file_dicts = [{'filename': sf.filename, 'link': '/download/get/%s' % sf.filename}
                       for sf in stored_files]
        json_dicts = json.dumps()


    else:
        raise Http404

    return HttpResponse('end')

def getfile(request):
    return HttpResponse("Success!")

@render_to('home.html')
def home2(request):
  return {}
# Create your views here.
