# Create your views here.
# Create your views here.
from django.http import HttpResponse, Http404
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from annoying.decorators import render_to
from upload.models import StoredFile
import pickle


# Don't require a csrf validation token
@csrf_exempt
def filehandler(request):
    if request.method == 'POST':
        filename = request.POST['filename']
        pickled_filedata = pickle.dumps(request.POST['file_data'])
        StoredFile.objects.create(filename=filename, file_data=pickled_filedata)
        return HttpResponse('file saved')

    else:
        raise Http404
