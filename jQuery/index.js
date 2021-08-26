

$("h1").addClass("big-title margin-50 padding-50");


$(document).keypress(function(event){
    $("h1").text(event.key);
});