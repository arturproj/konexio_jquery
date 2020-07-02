$( document ).ready(function() {
    $( "button" ).click(function() {
        $.ajax('https://restcountries.eu/rest/v2/name/france', {
            type: 'GET',  // http method
            success: function (data) {
                //console.log( 'data :', data);
                console.log( 'data :','name', data[0].name);
                console.log( 'data :','capital', data[0].capital);
            },
            error: function (errorMessage) {
                console.error('Error' + errorMessage);
            }
        });
    });
});