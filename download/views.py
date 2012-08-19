# Create your views here.
from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext
import json
from upload.models import *
import pdb
def search(request):
  return render_to_response('search.html', {},  context_instance=RequestContext(request))


def query(request):
    query = request.GET.get('query', '')
    
    
    start_index = request.GET.get('start_index', 0)
    end_index = request.GET.get('end_index', 10)
    #make sure start < end
    if start_index > end_index:
      end_index = start_index + 10

    
    query = str(query)
    
    matching_files = StoredFile.objects.filter(filename__istartswith=query)
    #order, limit, and offset parts of query
    matching_files.order_by('filename')[start_index:end_index]
    file_dicts = [{'filename': sf.filename, 'link': \
                  '/download/get/%s' % sf.filename}
                   for sf in matching_files]
    data = {'search_results': file_dicts}
    json_dicts = json.dumps(data)

    return HttpResponse(json_dicts, content_type='application/json')
  

    return HttpResponse('end')

def getfile(request):
    return HttpResponse("Success!")

@render_to('home.html')
def home2(request):
  return {}
# Create your views here.
