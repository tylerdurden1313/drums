var grp = document.querySelectorAll("button");
grp[0].addEventListener("click", function() {
  var audio = new Audio("0.mp3");
  audio.play();
});
grp[1].addEventListener("click", function() {
  var audio = new Audio("1.mp3");
  audio.play();
});
grp[2].addEventListener("click", function() {
  var audio = new Audio("2.mp3");
  audio.play();
});
grp[3].addEventListener("click", function() {
  var audio = new Audio("3.mp3");
  audio.play();
});
grp[4].addEventListener("click", function() {
  var audio = new Audio("4.mp3");
  audio.play();
});
grp[5].addEventListener("click", function() {
  var audio = new Audio("5.mp3");
  audio.play();
});
grp[6].addEventListener("click", function() {
  var audio = new Audio("6.mp3");
  audio.play();
});
document.addEventListener("keypress",function(event){
  if(event.key=="q"){
    var audio = new Audio("0.mp3");
    audio.play();
  }
  if(event.key=="w"){
    var audio = new Audio("1.mp3");
    audio.play();
  }
  if(event.key=="e"){
    var audio = new Audio("2.mp3");
    audio.play();
  }
  if(event.key=="r"){
    var audio = new Audio("3.mp3");
    audio.play();
  }
  if(event.key=="t"){
    var audio = new Audio("4.mp3");
    audio.play();
  }
  if(event.key=="y"){
    var audio = new Audio("5.mp3");
    audio.play();
  }
  if(event.key=="u"){
    var audio = new Audio("6.mp3");
    audio.play();
  }
});
