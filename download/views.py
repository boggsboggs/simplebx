# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext

def searchhandler(request):
  return render_to_response('search.html', {},  context_instance=RequestContext(request))


@render_to('home.html')
def home2(request):
  return {}
# Create your views here.
