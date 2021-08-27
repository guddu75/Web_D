
var buttonColors = ["red", "blue" , "green" , "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var flag= true;

var current = 0;

function startover() {
    flag=true;
    level = 0;
    gamePattern=[];
    userClickedPattern=[];
}




function nextSequence(){

    level+=1;
    current = 0;
    userClickedPattern = [];
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    var activeButton = $("#"+randomChoosenColor);
    activeButton.fadeOut(100).fadeIn(100);
    makesound(randomChoosenColor);


}


function makesound(sound_type){

    var audioFile= "sounds/"+sound_type+".mp3";

    // console.log(audioFile);

    var audio = new Audio(audioFile);
    audio.play();
    

}


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    
    setTimeout(() => {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel-1]===gamePattern[currentLevel-1]){
        // console.log("success");
        if(level==currentLevel){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }else{
        // console.log("wrong");
        var verdict = "wrong";
        makesound(verdict);
        $("body").addClass("game-over");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startover();

    }
}




$(".btn").click(function(){

    userChoosenColor = $(this).attr("id");

    userClickedPattern.push(userChoosenColor);
    makesound($(this).attr("id"));
    // console.log(userClickedPattern);
    animatePress($(this).attr("id"));
    current++;
    checkAnswer(current);

});



$(document).keypress(
    function(){
        if(flag){
            nextSequence();
            flag=false;
        }
        
    }
);



