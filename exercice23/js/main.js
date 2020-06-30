$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $("#square").animate({ 
        right: 0,
        bottom: 0,
      }, 1000 );
}