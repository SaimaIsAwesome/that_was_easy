// EasyClick Sounds
function sayThatWasEasy() { 
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);

//EasySpacebar Sounds
function delegateKeypress(event) {
    if (event.charCode == 32) {
    $("#easy").trigger("click");
 }
}

//HardButton Sounds
var airhorn = new Audio();
airhorn.src = "https://www.myinstants.com/media/sounds/mlg-airhorn.mp3";
function PlayAirhornSound() {
    airhorn.play();
}

//LOUDButton Action
$(function(){
    $("#loud").on({
        mouseover:function(){
            var left = parseFloat($(this).css("left"));
            var top = parseFloat($(this).css("top"));
            $(this).css("left", Number(left)+(Math.random()-0.5)*200);
            $(this).css("top", top+(Math.random()-0.5)*200);
            
        }
    });
});

//Unexpected Action
function close_window() {
  if (confirm("Do you want to see a funny video?")) {
    close();
  }
}

function addImages() {
    var img = document.createElement("img");
    img.src = "https://media2.giphy.com/media/ULyYV5amK2eYM/200.gif";
    var src = document.getElementById("images");
    src.appendChild(img);
}

//WhoCares Sound
function show_video(){
            $("#video").css("display", "block");
}