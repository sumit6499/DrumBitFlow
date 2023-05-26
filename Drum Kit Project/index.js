var main = document.querySelectorAll(".drum");
for (let i = 0; i < main.length; i++) {
  main[i].addEventListener("click", function () {
    soundPlay(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function soundPlay(keyPress) {
  if ("w" === keyPress) {
    var tom1Sound = new Audio("sounds/tom-1.mp3");
    tom1Sound.play();
  } else if ("a" === keyPress) {
    var tom2Sound = new Audio("sounds/tom-2.mp3");
    tom2Sound.play();
  } else if ("s" === keyPress) {
    var tom3Sound = new Audio("sounds/tom-3.mp3");
    tom3Sound.play();
  } else if ("d" === keyPress) {
    var tom4Sound = new Audio("sounds/tom-4.mp3");
    tom4Sound.play();
  } else if ("j" === keyPress) {
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
  } else if ("k" === keyPress) {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  } else if ("l" === keyPress) {
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
  } else {
    console.log("Invalid case");
  }
}

document.addEventListener("keypress", function keyPress(event) {
  soundPlay(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  var drumKey = document.querySelectorAll("." + key);
  drumKey[0].classList.add("pressed");
  setTimeout(function () {
    drumKey[0].classList.remove("pressed");
  }, 150);
}
