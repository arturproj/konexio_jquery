$( document ).ready(function() {
    btn = $( "button" );
    btn.click(function() {
        Magic()
    });
});

function Magic(){
    $( "#text" ).css("fontSize", 50).addClass("float-right").show("slow");
}