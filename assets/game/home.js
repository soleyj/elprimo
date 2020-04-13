$(document).ready(function () {

    $(document).on('click', '.entergame', function () {
        pass = $('#pass').val();
        pass = pass.toLowerCase();
        name = $('#name').val();
        
        email = $('#email').val();

        radio_1 = $("#radio_1").is(":checked")
        radio_2 = $("#radio_2").is(":checked")
        console.log(new_game)
        if(pass == "fiesta")
        {
            console.log("ojk")
            if(radio_1 == true)
            {
                if(validateEmail(email))
                {
                    $( ".spiner" ).append( "<div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div>" );
                    $.ajax({
                        type: "GET",
                        url: new_game, // URL to your view that serves new info
                        data: {
                            'name': name,
                            'email':email,
                            'radio':radio_2,
                        } ,
                        success: function(response){
                            window.location.href = "start"
                        }    
                    })
                }
                else
                {
                    $.alert({
                        title: 'Error',
                        content: 'El correo debe ser valido',
                    });  
                }

            }
            else{
                $.alert({
                    title: 'Error',
                    content: 'Debes aceptar los terminos y condiciones',
                }); 
            }
        }
        else{
            $.alert({
                title: 'Palabra secreta incorrecta',
                content: 'Volver a Intentar',
            });
        }
    });   

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      
  

});
