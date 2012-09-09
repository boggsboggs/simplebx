# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext
import json
from django.core.urlresolvers import reverse
from upload.models import *

def search(request, initial_query):
  query = request.GET.get('query', '')
  if query:
    q_results = query_lookup(query)
  else:
    q_results = construct_file_dict(StoredFile.objects.all())
    q_results = wrap_data(q_results)
  return render_to_response('search.html', {'search_results':q_results['search_results']},
    context_instance=RequestContext(request))

def query(request):
  query = request.GET.get('query', '')
  start_index = request.GET.get('start_index', 0)
  end_index = request.GET.get('end_index', 10)

  data = query_lookup(query)
  json_dicts = json.dumps(data)
  return HttpResponse(json_dicts, content_type='application/json')

def query_lookup(query, start_index=0, end_index=10):

  #make sure start < end
  if start_index > end_index:
    end_index = start_index + 10
  query = str(query)

  matching_files = StoredFile.objects.filter(filename__istartswith=query)
  #order, limit, and offset parts of query
  matching_files.order_by('filename')[start_index:end_index]
  file_dicts = construct_file_dict(matching_files)
  return wrap_data(file_dicts)

def wrap_data(file_dicts):
  return {'search_results': file_dicts}

def construct_file_dict(matching_files):

  ret = [{'filename': sf.filename,
       'link': filelink(sf),
       'is_encrypted': sf.is_encrypted
       } for sf in matching_files]

  return ret

def filelink(fi):
  return reverse('getfile', args=[fi.filename])
def getfile(request, filename):
  file_data = StoredFile.objects.filter(filename=filename)[0].file_data
  return HttpResponse(file_data)

@render_to('home.html')
def home2(request):
  return {}
# Create your views here.
