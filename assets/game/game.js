$(document).ready(function () {

    $(document).on('click', '.get_alias', function () {
        name = $('#name').val();
        console.log(name)
        window.localStorage.setItem("name",name);
        $.ajax({
            type: "GET",
            url: new_player, // URL to your view that serves new info
            data: {
                'name': name,
            } ,
            success: function(response){
                window.location.href = "lobby"
            }    
        })
        
        
    });  


    $(document).on('click', '.start_game', function () {
        
        
        $.ajax({
            type: "GET",
            url: start_url, // URL to your view that serves new info
        })
        
    });  

    $(document).on('click', '.input_data_1', function () {
        name = window.localStorage.getItem("name");
        data = $('#data').val();
        $('#data').val("");
        console.log(data)
        
        $.ajax({
            type: "GET",
            url: ask_player, // URL to your view that serves new info
            data:
            {
                "name":name,
                "data":data,
            }
        })
        $.alert({
            title: 'Correcto',
            content: 'Pasta IN',
        }); 
        
    });  

    $(document).on('click', '.input_data_3', function () {
        name = window.localStorage.getItem("name");
        data = $('#data').val();
        $('#data').val("");
        console.log(data)
        
        $.ajax({
            type: "GET",
            url: kill_player, // URL to your view that serves new info
            data:
            {
                "name":name,
                "data":data,
            }
        })
        $.alert({
            title: 'Correcto',
            content: 'Pasta IN',
        }); 
        
    });  

    $(document).on('click', '.input_data_5', function () {
        name = window.localStorage.getItem("name");
        data = $('#data').val();
        $('#data').val("");

        
        $.ajax({
            type: "GET",
            url: get_player, // URL to your view that serves new info
            data:
            {
                "name":name,
                "data":data,
            }
        })
        $.alert({
            title: 'Correcto',
            content: 'Pasta IN',
        }); 
        // $.ajax({
        //     type: "GET",
        //     url: start_url, // URL to your view that serves new info
        // })
        
    });  


});
