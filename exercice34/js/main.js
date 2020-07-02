$( document ).ready(function() {
    $( "button" ).click(function() {
        $.ajax('https://restcountries.eu/rest/v2/name/'+$( "input" ).val(), {
            type: 'GET',  // http method
            success: function (data) {
                $( "#country" ).text(data[0].name)
                $( "#capital" ).text(data[0].capital)
            },
            error: function (errorMessage) {
                console.error('Error' + errorMessage);
            }
        });
    });
});