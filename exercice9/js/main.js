$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        displaySecretText()
    });
});

function displaySecretText(){
    $( "#text" ).css("display","block")
}