for(var i = 0; i<document.querySelectorAll(".drum").length; i++) {

    // Detecting clicks
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        btn=this.innerHTML;
        sound(btn);
        animate(btn);

    });
}

// Detecting keypress
document.addEventListener("keydown",function(e){
    sound(e.key);
    animate(e.key);
})

function sound(btn){
    switch(btn){
        case "w": var audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
        
        case "a": var audio=new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;

        case "s": var audio=new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

        case "d": var audio=new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

        case "j": var audio=new Audio("./sounds/snare.mp3");
                audio.play();
                break;

        case "k": var audio=new Audio("./sounds/crash.mp3");
                audio.play();
                break;

        case "l": var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;

        default: console.log(this);
    }
}

function animate(btn){
    c=document.querySelector("."+btn);
    c.classList.add("pressed");
    setTimeout(function(){
        c.classList.remove("pressed");
    },200);    

}