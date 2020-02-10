$( document ).ready(function() {

    // load spinner window then remove 
    $("loader").load("loader.html");
    setTimeout(function(){
        $("loader").fadeOut("slow");
      }, 2000);
    
    $("#login").on("click", function (){
        window.location.href="./dashboard.html";
    })  


});