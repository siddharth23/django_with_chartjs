from django.shortcuts import render
from django.http.response import JsonResponse
# Create your views here.
def get_data(request):
    label=["load","solar","utility","dg","es"]
    data=[-88,45,78,2,90]
    return JsonResponse({"label":label,"data":data})
from django.views.generic import View
from django.shortcuts import render
class UIView(View):
    def get(self,request):
        return render(request,"index.html",{})
