from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse
from django.views.generic import (View, TemplateView,
                                  ListView, DetailView,
                                  CreateView, DeleteView,
                                  UpdateView)

from . import models
import json
# Create your views here.
from django.conf import settings
from django.http import HttpResponse, Http404,HttpResponseRedirect
from django.template import Context, loader
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import redirect
from game_primo import game_primo

game_primo = game_primo.GamePrimo()

def myview(request):
    return HttpResponseRedirect("/elprimo/")

class DashboardView(TemplateView):
    # Just set this Class Object Attribute to the template page.
    template_name = 'game/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        return context

class GameView(TemplateView):
    # Just set this Class Object Attribute to the template page.
    template_name = 'game/game.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        return context


def get_data(request):
    name = request.GET['name']
    template_name = "game/game_" + str(progres) + ".html"
    template = loader.get_template(template_name)
    print(progres)
    return HttpResponse(template.render())