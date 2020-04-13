from django.urls import path
from game import views



app_name = 'game'

urlpatterns = [
    path(r'',views.DashboardView.as_view(), name='home'),
    path(r'game',views.GameView.as_view(), name='game'),
    path(r'lobby',views.LobbyView.as_view(), name='lobby'),
    # path(r'final',views.Final_view.as_view(), name='final'),
    # path(r'dades',views.dades_view.as_view(), name='dades'),
    # path(r'guia',views.guia_view.as_view(), name='guia'),
    # path(r'list_game',views.C_game_list.as_view(), name='list_game'),
    # path(r'list_game_h',views.C_game_list_h.as_view(), name='list_game_h'),


    # #"api"start_game
    path(r'get_data', views.get_data, name='get_data'),
    path(r'add_user', views.add_user, name='add_user'),
    path(r'start_game', views.start_game, name='start_game'),
    path(r'lobby_data', views.lobby_data, name='lobby_data'),
    path(r'check_game', views.check_game, name='check_game'),
    path(r'kill_player', views.kill_player, name='kill_player'),
    path(r'ask_player', views.ask_player, name='ask_player'),
    path(r'get_player', views.get_player, name='get_player'),
    # path(r'name_id', views.name_id, name='name_id'),


    # path(r'^$', views.GameListView.as_view(), name='list'),
    # path('<int:pk>/', views.GameDetailView.as_view(), name='detail'),

] 