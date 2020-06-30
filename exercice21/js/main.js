$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $("#square").animate({ 
        width: 500,
      }, 1000 );
}