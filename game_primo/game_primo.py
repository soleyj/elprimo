
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


    def add_player(self,name):
        self.players.append(Players(name))
    
    def remove_player(self,name):
        for index,player in enumerate(self.players):
            if(player.name == name):
                del self.players[index]
                break

    
    def start(self):
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
                    self.inter_turn += 1
                    self.time = 20
                
                elif(self.inter_turn == 2):
                    self.dead_player()
                    self.inter_turn += 1
                    self.time = 5

                elif(self.inter_turn == 3):
                    self.inter_turn += 1
                    self.time = 20

                elif(self.inter_turn == 4):
                    self.ask_player()
                    self.inter_turn += 1
                    self.time = 5

                elif(self.inter_turn == 5):
                    self.inter_turn += 1
                    self.time = 20

                elif(self.inter_turn == 6):
                    self.gold_player()
                    self.inter_turn += 1
                    self.time = 4

                elif(self.inter_turn == 7):
                        self.inter_turn = 1
                        self.time = 0
                        self.turn += 1
                        if(self.turn == 6):
                            self.start = 0


            else:
                self.time -= 1
        


    def ask_player(self):
        for index,player in enumerate(self.players):
            for player2 in enumerate(self.players):
                if(player.ask == player2.name):
                    if(player.gold > player2.gold):
                        player.answ = 1
                    
                    else:
                        player.answ = -1


    def gold_player(self):
        temp_array=[]


    def dead_player(self):
        temp_array=[]
        for index,player in enumerate(self.players):
            temp_array.append(player.kill)
        
        killed = max(set(temp_array), key = temp_array.count) 
        self.dead_player = killed
        for index,player in enumerate(self.players):
            if(player.name == name):
                self.total_gold += int(player.gold/2)
                player.gold = int(player.gold/2)
        



    def kill_player(self,name,kill):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.kill = kill
                break
    
    def ask_player(self,name,ask):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.ask = ask
                break
    
    def get_player(self,name,wanted_gold):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.wanted_gold = wanted_gold
                break
        

                ame == item[0]):
                        self.gold = self.gold - item[1]
                        player.gold = item[1]
            else:
                break



    def dead_player(self):
        temp_array=[]
        for index,player in enumerate(self.players):
            temp_array.append(player.kill)
        
        killed = max(set(temp_array), key = temp_array.count) 
        self.dead_player = killed
        for index,player in enumerate(self.players):
            if(player.name == name):
                self.total_gold += player.gold/2
                player.gold = player.gold/2
        



    def kill_player(self,name,kill):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.kill = kill
                break
    
    def ask_player(self,name,ask):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.ask = ask
                break
    
    def get_player(self,name,wanted_gold):
        for index,player in enumerate(self.players):
            if(player.name == name):
                player.wanted_gold = wanted_gold
                break
        

                
    

