$(document).ready(function () {
    function get_progress()
    {
        progres = window.localStorage.getItem('progres');
        console.log(progres)
        if(progres < 10)
        {
            url = RemoveLastDirectoryPartOf(window.location.href);
            console.log(url)
            window.location.href = url
            
        }
        else
        {

        }
        
    }
    get_progress()
    function RemoveLastDirectoryPartOf(the_url)
    {
        var the_arr = the_url.split('/');
        the_arr.pop();
        return( the_arr.join('/') );
    }
 
    $(document).on('click', '.check_answ2', function () {
        $.confirm({
            title: 'Reiniciar!',
            content: 'Quieres volver a empezar??',
            buttons: {
                SI: {
                    btnClass: 'btn-red',
                    action: function () {
                        progres = 1
                        window.localStorage.setItem("progres",progres);
                        url = RemoveLastDirectoryPartOf(window.location.href);
                        console.log(url)
                        window.location.href = url
                    }
                },
                NO: function () {
                }
            }
        });
   
    });

    $(document).on('click', '.give_feedback', function () {
        value = (name = $('#form_nota').val());
        progres = window.localStorage.getItem('progres');
        if(value == "Nota:")
        {
            $.alert({
                title: 'Error',
                content: 'Debes introducir una nota!',
            }); 
        }
        else
        {
            if(progres == 10)
            {
                window.localStorage.setItem("progres",11);
                $.ajax({
                    type: "GET",
                    url: give_nota, // URL to your view that serves new info
                    data: {
                        'nota': value,

                    }   
                })
                $.alert({
                    title: 'Gracias por tu respuesta',
                    content: '¡No te olvides de compartir el juego!',
                }); 
            }
            else{
                $.alert({
                    title: 'Error',
                    content: 'Solo puedes votar una vez!',
                });  
            }
        }
        
        // $.confirm({
        //     title: 'Reiniciar!',
        //     content: 'Quieres volver a empezar??',
        //     buttons: {
        //         SI: {
        //             btnClass: 'btn-red',
        //             action: function () {
        //                 $('#name_game').val("");
        //                 progres = 1
        //                 window.localStorage.setItem("progres",progres);
        //                 get_data() 
        //             }
        //         },
        //         NO: function () {
        //         }
        //     }
        // });
   
    });
});
