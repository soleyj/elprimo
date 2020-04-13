$(document).ready(function () {
    function get() {
        var table = $('#game_data');
        var data = [];

        table.find('tr').each(function (i, el) {
            // no thead
            data.push($(this).find('#name_box').text());
        });
        return data;
    }

    $(document).on('click', '.testON', function () {
        console.log("hey")
        $.ajax({
            type: "GET",
            url: start_test, // URL to your view that serves new info
        })

    });

    $(document).on('click', '.pausegame', function () {
        console.log("hey")

        $.ajax({
            type: "GET",
            url: pause_game, // URL to your view that serves new info
        })

    });

    $(document).on('click', '.replaygame', function () {
        $.ajax({
            type: "GET",
            url: replay_game, // URL to your view that serves new info
        })

    });

    $(document).on('click', '.testOFF', function () {


        $.ajax({
            type: "GET",
            url: stop_test, // URL to your view that serves new info
        })

    });

    $(document).on('click', '.addrobotinfo', function () {
        var robot_id = $(this).attr('member_id')
        var form = "#name" + robot_id

        name = $(form).val();

        $.ajax({
            type: "GET",
            url: state_url, // URL to your view that serves new info
            data: {
                'robot_id': robot_id,
                'name': name
            }
        })

    });

    $(document).on('click', '.updateStart', function () {
        data = get();
        skip = 0
        console.log(data)
        for (i = 1; i < data.length; i++) {
            console.log(data[i])
            if (data[i] == "") {
                $.alert({
                    title: 'Error',
                    content: 'Porfavor introduce el nombre de todos los equipos',
                });
                break;
            }
        }
        console.log(skip)
        if (skip == 0) {
            $.ajax({
                type: "GET",
                url: start_game, // URL to your view that serves new info
            })
            setTimeout(function () {
                location.reload();
                //your code to be executed after 1 second
            }, 1000);
        }
    });

    $(document).on('click', '.updateDemo', function () {
        console.log("hey")
        $.confirm({
            title: 'DEMO!',
            content: 'Cuidado estas apunto de empezar una demo del juego. NO ES EL JUEGO COMPLETO! ¿Estas seguro?',
            buttons: {
                SI: {
                    btnClass: 'btn-blue',
                    action: function () {
                        console.log
                        $.ajax({
                            type: "GET",
                            url: start_demo, // URL to your view that serves new info
                        })
                        setTimeout(function () {
                            location.reload();
                            //your code to be executed after 1 second
                        }, 1000);

                    }
                },
                NO: function () {
                }
            }
        });
    });


    $(document).on('click', '.stopandSave', function () {
        console.log("hey")
        $.confirm({
            title: 'ALERTA!',
            content: 'Si el juego no hay terminado no se guardaran los datos de la partida!',
            buttons: {
                SI: {
                    btnClass: 'btn-blue',
                    action: function () {
                        console.log
                        $.ajax({
                            type: "GET",
                            url: save_stopGame, // URL to your view that serves new info
                        })
                        setTimeout(function () {
                            location.reload();
                            //your code to be executed after 1 second
                        }, 1000);

                    }
                },
                NO: function () {
                }
            }
        });
    });


    $(document).on('click', '.updateStop', function () {
        console.log("hey")
        $.confirm({
            title: 'ALERTA!',
            content: 'El juego va ser eliminado y toda su informacion!',
            buttons: {
                SI: {
                    btnClass: 'btn-blue',
                    action: function () {
                        console.log
                        $.ajax({
                            type: "GET",
                            url: delete_game, // URL to your view that serves new info
                        })
                        setTimeout(function () {
                            location.reload();
                            //your code to be executed after 1 second
                        }, 1000);

                    }
                },
                NO: function () {
                }
            }
        });
    });


    $(document).on('click', '.newgame', function () {
        name = $('#name_game').val();
        output = 0
        idioma = 0
        name_quiz = $('[name="choose_game"]').val()
        console.log(name_quiz)
        if ($("#exampleRadios1").is(":checked")) {
            output = 2
        }

        else if ($("#exampleRadios2").is(":checked")) {
            output = 1
        }
        if ($("#idioma_english").is(":checked")) {
            idioma = 2
        }

        else if ($("#idioma_esp").is(":checked")) {
            idioma = 1
        }

        if (name == "") {
            $.alert({
                title: 'Error',
                content: 'Porfavor introduce el nombre de la partida',
            });
        } else {
            $.ajax({
                type: "GET",
                url: new_game, // URL to your view that serves new info
                data: {
                    'name': name,
                    'output': output,
                    'idioma':idioma,
                    'name_quiz':name_quiz[0],
                }
            })
            setTimeout(function () {
                location.reload();
                //your code to be executed after 1 second
            }, 1000);
        }


    });
});
