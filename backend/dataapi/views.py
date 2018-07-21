from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Data
from .serializers import DataSerializer

@csrf_exempt
def data_list(request):
    """
    List all code data, or create a new data.
    """
    if request.method == 'GET':
        data = Data.objects.all()
        serializer = DataSerializer(data, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = DataSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def data_detail(request, pk):
    """
    Retrieve, update or delete a code data.
    """
    try:
        data = Data.objects.get(pk=pk)
    except Data.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = DataSerializer(data)
        return JsonResponse(serializer.data)

