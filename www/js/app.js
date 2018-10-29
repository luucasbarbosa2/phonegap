$(document).on('deviceready', function() {

    $.ajax({
        url: 'http://18.206.179.76/neo4j/phonegap',
        type: 'POST',
        dataType: 'json',
        data: {
            param1: 'value1'
        },
    }).done(function() {
        console.log("success");
    }).fail(function() {
        console.log("error");
    }).always(function(data) {
        console.log(data);
        console.log("complete");
    });

    navigator.vibrate(3000);

    $(".listening").click(function(event) {
        navigator.vibrate(3000);
    });
    
});