
import random


def takeSecond(elem):
    return elem[1]


class Players():
    def __init__(self,name_):
        self.name = name_
        self.gold = 0
        self.online = 10
        self.wanted_gold = 0
        self.kill = ""
        self.ask = ""
        self.answ = 0



class GamePrimo():
    def __init__(self):
        self.players =[]
        self.start = 0
        self.turn = 0
        self.inter_turn = 5
        self.time = 0
        self.total_gold = 0
        self.dead_player = ""
        

    def add_player(self,name):
        self.players.append(Players(name))

    
    def remove_player(self,name):
        for index,player in enumerate(self.players):
            if(player.name == name):
                del self.players[index]
                break

    def return_data(self,name):
        temp_array = []
        for player in self.players:
            temp_array.append(player.name)
        
        for index,player in enumerate(self.players):
            if(player.name == name):
                data = {"time": self.time,
                        "inter_turn": self.inter_turn,
                        "total_gold": self.total_gold,
                        "gold": player.gold,
                        "answ": player.answ,
                        "dead_player": self.dead_player,
                        "player_names": temp_array,
                        "start":self.start
                        }
                return data
        
        data = {"time": self.time,
                        "inter_turn": self.inter_turn,
                        "total_gold": self.total_gold,
                        "player_names": temp_array,
                        "start":self.start
                        }
        return data 
        
    
    def Start(self):
        self.start = 1
        self.turn = 0
        self.inter_turn = 5
        self.time = 0
        self.total_gold = random.randint(100,150)
        self.dead_player = ""
        for player in (self.players): 
            self.gold = 0
            self.wanted_gold = 0
            self.kill = ""
            self.ask = ""
            self.answ = 0

    def run(self):
        if(self.start == 1):
            if(self.time == 0):
                if(self.inter_turn == 1):
                    # self.ask_player()
                   
                    self.time = 10
                
                elif(self.inter_turn == 2):
                   
                    self.time = 5

                elif(self.inter_turn == 3):
                   
                    self.time = 10

                elif(self.inter_turn == 4):
                    
                   
                    self.time = 5

                elif(self.inter_turn == 5):
                   
                    self.time = 10

                elif(self.inter_turn == 6):
                    
                   
                    self.time = 4

                elif(self.inter_turn == 7):
                        self.augmentar_boti
                        self.inter_turn = 1
                        self.time = 0
                        self.turn += 1
                        if(self.turn == 6):
                            self.start = 0


            else:
                self.time -= 1
                if(self.time == 0):
                    self.inter_turn += 1
                    if(self.inter_turn == 4):
                        self.Dead_player()
                    if(self.inter_turn == 6):
                        self.gold_player()
        

    def ask_player(self,name_,ask_): #Torn 1: Generar la llista de quí te més pata que qui
        for index,player in enumerate(self.players):
            if player.name == name_:
                for player2 in self.players:
                    if(ask_ == player2.name):
                        if(player.gold > player2.gold):
                            player.answ = 1
                        
                        else:
                            player.answ = -1
                        return(player.answ)



# #FALTA FER QUE DIGUI SI L'ALTRA PERSONA TÉ MÉS PASTA QUE TU O NO
#     def Ask_player(self,name,ask): #Torn 2, preguntar si X persona té més pasta que tu
#         for index,player in enumerate(self.players):
#             if(player.name == name):
#                 player.ask = ask
#                 break
            
            





    def kill_player(self,name,kill): #Torn 3, dir a qui vol matar cadascú
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.kill = kill
                break


    def Dead_player(self): #Torn 4, matar-lo
        temp_array=[]
        for index,player in enumerate(self.players):
            temp_array.append(player.kill)
        
        killed = max(set(temp_array), key = temp_array.count) 
        self.dead_player = killed
        for index,player in enumerate(self.players):
            if(player.name == killed):
                self.total_gold += int(player.gold/2)
                player.gold = int(player.gold/2)
        


    
    def get_player(self,name,wanted_gold): #Torn 5, quant del botí vol cadascú
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.wanted_gold = wanted_gold
                break

    def gold_player(self): #Torn 6, repartir botí
        temp_array=[]
        #Ordena de petit a gran
        for i in self.players:
            temp_array.append(i.wanted_gold)
        temp_array.sort
           # while np.any(x[:-1] > x[1:]):
           #    np.random.shuffle(x)
           #    return x
        #Busca quin jugador ha apostat pel petit amb un doble for
        for j in temp_array:  
          for i in self.players:
            if (j == i.wanted_gold):
                if(self.total_gold-j>=0):
                    self.total_gold-=j
                    i.gold+=j
                    i.wanted_gold=0
                else:
                    break

    def augmentar_boti(self): #Torn 7, augmentar el botí
        self.total_gold +=30


    def show_players(self):
       for i in self.players:
         print (i.name)

