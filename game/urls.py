from django.urls import path
from game import views



app_name = 'game'

urlpatterns = [
    path(r'',views.DashboardView.as_view(), name='home'),
    path(r'start',views.GameView.as_view(), name='game'),
    # path(r'pistas',views.Pistas.as_view(), name='pistas'),
    # path(r'final',views.Final_view.as_view(), name='final'),
    # path(r'dades',views.dades_view.as_view(), name='dades'),
    # path(r'guia',views.guia_view.as_view(), name='guia'),
    # path(r'list_game',views.C_game_list.as_view(), name='list_game'),
    # path(r'list_game_h',views.C_game_list_h.as_view(), name='list_game_h'),


    # #"api"start_game
    # path(r'index', views.index, name='index'),
    # path(r'check_response', views.check_response, name='check_response'),
    # path(r'start_game', views.start_game, name='start_game'),
    # path(r'give_nota', views.give_nota, name='give_nota'),
    # path(r'chat_bot', views.chat_bot, name='chat_bot'),
    # path(r'save_stopGame', views.save_stopGame, name='save_stopGame'),
    # path(r'start_game', views.start_game, name='start_game'),
    # path(r'add_points', views.add_points, name='add_points'),
    # path(r'change_name', views.change_name, name='change_name'),
    # path(r'name_id', views.name_id, name='name_id'),


    # path(r'^$', views.GameListView.as_view(), name='list'),
    # path('<int:pk>/', views.GameDetailView.as_view(), name='detail'),

] 