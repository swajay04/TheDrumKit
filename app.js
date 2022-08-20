for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var adbutton = this.innerHTML;
        makeSound(adbutton);
        buttonAnimation(adbutton);


    });
}

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);

})




function makeSound(key) {
    switch (key) {

        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;


        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;


        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;


        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;


        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;


        case "k":
            var kickb = new Audio("kick-bass.mp3");
            kickb.play();
            break;


        case "l":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;


        default:
            console.log();


    }

}


function buttonAnimation(currkey) {
    var activeButton = document.querySelector("." + currkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100)


}