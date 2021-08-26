
// button press 

var buttons = document.querySelectorAll(".drum");

for (var i=0 ; i< buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        
        var x = this.innerHTML;
        buttonAnimation(x);

        makesound(x);
    });
}

// Key board press

document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

// document.addEventListener("keypress",  makesound(event.key));


function makesound(event){
    var audioFile ;

    switch(event) {
        case "w" :
            audioFile = "sounds/tom-1.mp3";
            break;
        case "a" :
            audioFile = "sounds/tom-2.mp3";
            break;
        
        case "s" :
            audioFile = "sounds/tom-3.mp3";
            break;
        case "d" :
            audioFile = "sounds/tom-4.mp3";
            break;
        case "j":
            audioFile = "sounds/snare.mp3";
            break;
        case "k":
            audioFile = "sounds/crash.mp3";
            break;
        case "l":
            audioFile = "sounds/kick-bass.mp3";
            break;
        default :
            console.log(x);
    }

    var audio = new Audio(audioFile);
    audio.play();
}


function buttonAnimation(event){
    var activeButton = document.querySelector("."+event);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}