$( document ).ready(function() {
    $( "button" ).click(function() {
        console.log( $( "input" ).val().length , $( "input" ).val() )
         return ( $( "input" ).val().length > 5 ? $( "input" ).addClass( "is-valid" ) : $( "input" ).addClass( "is-invalid" ) )
    });
});