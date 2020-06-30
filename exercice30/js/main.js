$( document ).ready(function() {
    $("input").keyup(function(){
        return ( $( "input" ).val().length > 5 ? $( "input" ).addClass( "is-valid" ).removeClass( "is-invalid" ) : $( "input" ).addClass( "is-invalid" ).removeClass( "is-valid" ) )
    });
});