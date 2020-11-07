from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Blog
from .serializers import BlogSerializer
from rest_framework import status

@api_view(['GET'])
def helloworld(request):
    return Response("hello world")


@api_view(['GET'])
def blog_api(request):
    queryset = Blog.objects.all().order_by('-title')
    serializer = BlogSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)  
