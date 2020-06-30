$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $("#text").animate({ 
        fontSize: 50,
      }, 1000 );
}