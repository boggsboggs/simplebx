# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from annoying.decorators import render_to
from django.template import RequestContext


def home(request):
    return render_to_response('home.html', {},  context_instance=RequestContext(request))


def csrf_failure(request, reason=""):
    print "CSRF Failure"


@render_to('home.html')
def home2(request):
  return {}
