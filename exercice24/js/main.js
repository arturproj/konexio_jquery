$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $("#bg").animate({ 
        marginLeft: 100,
      }, 1000 );
}