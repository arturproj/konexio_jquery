$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $( "#text" ).hide("slow");
}