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
from apscheduler.schedulers.background import BackgroundScheduler
import time


game_primo = game_primo.GamePrimo()

scheduler = BackgroundScheduler()

scheduler.add_job(game_primo.run, 'interval', seconds=1)
scheduler.start()
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

class LobbyView(TemplateView):
    # Just set this Class Object Attribute to the template page.
    template_name = 'game/lobby.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        return context


def get_data(request):
    name = request.GET['name']
    print("inn")
    data = game_primo.return_data(name)
    print(data)
    template_name = "game/game_template/game_"+ str(data["inter_turn"])+".html"

    return render(request,template_name,data)

def add_user(request):
    name = request.GET['name']
    game_primo.add_player(name)

    return HttpResponse("ok")

def check_game(request):
    data = game_primo.return_data("")
    return HttpResponse(json.dumps(data))

def lobby_data(request):
    data = game_primo.return_data("")
    template_name = "game/lobby_players.html"
    return render(request,template_name,data)

def start_game(request):
    
    game_primo.Start()
    return HttpResponse("ok")
    

def kill_player(request):
    name = request.GET['name']
    data = request.GET['data']
    game_primo.kill_player(name,data)
    print("ok")
    return HttpResponse("ok")

def ask_player(request):
    name = request.GET['name']
    data = request.GET['data']
    game_primo.ask_player(name,data)
    print("ok")
    return HttpResponse("ok")

def get_player(request):
    name = request.GET['name']
    data = request.GET['data']
    game_primo.get_player(name,int(data))
    print("ok")
    return HttpResponse("ok")
