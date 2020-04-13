$(document).ready(function () {




    $(document).on("click", ".data_in", function () {
        name_maleta = $('#data_in').val();
        name_game = $('#choose_game').val();
        console.log(name_maleta)
        console.log(name_game)
        if (name == "" || name == null) {
            $.alert({
                title: 'Error',
                content: 'Porfavor introduce un numero',
            });
        } else {
            $.ajax({
                type: "GET",
                url: config_segments, // URL to your view that serves new info
                data: {
                    'name_game': name_game[0],
                    'maleta': name_maleta[0],
                      }
          })
        }
    })
                
});