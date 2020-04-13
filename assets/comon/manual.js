$(document).ready(function () {

    // $(document).on('click', '', function () {
    //     console.log(button.id)
    //     $.ajax({
    //         type: "GET",
    //         url: start_test, // URL to your view that serves new info
    //     })

    // });
    $("button").click(function() {
        console.log(this.id); // or alert($(this).attr('id'));
        $.ajax({
            type: "GET",
            url: manual_url, // URL to your view that serves new info
            data: {
                'id': this.id,
            }
        })
    });


});
