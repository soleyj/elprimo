import Primo


gprimo = Primo.GamePrimo()

gprimo.add_player("Miquel")
gprimo.add_player("Josep")

gprimo.show_players()
gprimo.Start()

last_inter_turn =0

while True:
    gprimo.run()
    if(gprimo.inter_turn != last_inter_turn):
        canvi_torn(gprimo.inter_turn-1)

    last_inter_turn = gprimo.inter_turn 


def canvi_torn(estat):
    if(estat == 1):

        pass
    elif(estat == 2):

        pass
    elif(estat == 3):

        pass
    elif(estat == 4):

        pass
    elif(estat == 5):

        gprimo.get_player("Miquel",20)
        gprimo.get_player("Josep",20)
        pass
    elif(estat == 6):

        pass

    