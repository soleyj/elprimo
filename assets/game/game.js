$(document).ready(function () {
    function get_progress()
    {
        progres = window.localStorage.getItem('progres');
        if(progres == null)
        {
            window.localStorage.setItem("progres",1);
            
        }
        if(progres == 10)
        {
            window.location.href = "final"
        }
        get_data()
        
    }


    function get_data()
    {
        progres = window.localStorage.getItem('progres');
        $.ajax({
            type: "GET",
            url: index , 
            data:{
                "progres":progres
            }
            })
            .done(function (response) {
                $('#append_').html(response);
              });
    }
    get_progress()


    function get_chat_bot(id)
    {
        $.ajax({
            type: "GET",
            url: chat_bot , 
            data:{
                "progres":id
            }
            })
            .done(function (response) {
                $('#append_').html(response);
              });
    }

    $(document).on('click', '.check_answ2', function () {
        $.confirm({
            title: 'Reiniciar!',
            content: 'Quieres volver a empezar??',
            buttons: {
                SI: {
                    btnClass: 'btn-red',
                    action: function () {
                        $('#name_game').val("");
                        progres = 1
                        window.localStorage.setItem("progres",progres);
                        get_data() 
                    }
                },
                NO: function () {
                }
            }
        });
   
    });
    $(document).on('click', '.check_answ', function () {
        name = $('#name_game').val();
        $('#name_game').val("");
        name  = name.toLowerCase();
        console.log(name)
        progres = window.localStorage.getItem('progres');
        if(name == "mesón la troya")
        {
            name = "meson la troya"
        }
        $.ajax({
            type: "GET",
            url: check_answ, // URL to your view that serves new info
            data: {
                'answer': name,
                'progres':progres
            },
            success: (function(data){
                if(data == "ok")
                {
                    $.alert({
                        title: 'Correcto',
                        content: 'Continuar',
                    }); 
                    progres = window.localStorage.getItem('progres');
                    progres ++;
                    window.localStorage.setItem("progres",progres);
                    get_data()
                    if(progres == 10)
                    {
                        window.location.href = "final"
                    }
                }
                else{
                    $.alert({
                        title: 'Incorrecto',
                        content: 'Volver a Intentar',
                    }); 
                }
            }),       
        })
    });   

    var state_game = 0
    
    $(document).on('click', '.enter', function () {
    id = (this.id);
    name = $('#input_chat').val();
    name  = name.toLowerCase();
    $('#input_chat').val("");
    if(id == 4)
    {
        if(name == "5")
        {
            get_chat_bot("5")
        }
        else
        {
            get_chat_bot("4")
        }

    }
    else if(id == 6)
    {
        if(name == "quincy")
        {
            get_chat_bot("7")
        }
        else
        {
            get_chat_bot("6")
        }

    }
    else if(id == 8)
    {
        if(name == "22")
        {
            get_chat_bot("9")
        }
        else
        {
            get_chat_bot("8")
        }
    }
    else
    {
        console.log(id)
        get_chat_bot(id)

    }



    });  

    $(document).on('click', '.pass_game9', function () {
        progres = window.localStorage.getItem('progres');
        progres ++;
        window.localStorage.setItem("progres",progres);
        if(progres == 10)
        {
            window.location.href = "final"
        }
    
    
    
        });  




});
