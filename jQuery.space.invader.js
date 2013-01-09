var x = $("#space-invader").position().left;
var y = $("#space-invader").position().top;
var w = $(".container").width();
var h = $(".container").height()-30;
var dir = "toRight";

//Start with a random x potion for the Invader
$("#space-invader").css("left", w*Math.random());

//Define the path the Invader moves along
var time = setInterval(function(){

  if (dir == "toRight") {
    invaderRight();
  } else if (dir == "toLeft") {
    invaderLeft();
  }
  
  if (x <= 0) { dir = "toRight";}
  if (x >= w) { dir = "toLeft";}
  if (y <= h) {invaderDown();}  
  
  x = $("#space-invader").position().left;
  y = $("#space-invader").position().top;
}, 50);


function invaderRight(){
  $("#space-invader").animate({'left': '+=5'},0);
}

function invaderLeft(){
  $("#space-invader").animate({'left': '-=5'},0);
}

function invaderDown(){
    $("#space-invader").animate({'top': '+=1'},0);
}

//Define the Trap behavior
// 1. When the Trap is clicked, the opacity increases
var alpha = parseFloat($("#trap").css("opacity"));
$('#trap').click(function(){
  if (alpha > 0.75) {
    alpha = 0.75;
  }else {
    alpha += .05;
  }
  $("#trap").css("opacity", alpha);
  alpha = parseFloat($("#trap").css("opacity"));
});

//2. When the mouse is at the bottom of the Container, the Trap moves with the mouse
$('.container').mousemove(function(e){
  var mX = e.pageX - $(this).offset().left,
      mY = e.pageY - $(this).offset().top,
      margin = $('#trap').width()/2;
  
  if (mY > $(this).height()-$("#trap").height()) {
    if (mX > margin && mX < $(this).width()-margin){
      $("#trap").offset({left: e.pageX-margin});
    }
  }
});

/*3. Define the success of the game
$('#trap').click(function(){
  if (alpha == .75 &&Invader is inside the trap){
    //Invader stops moving around
    //It will be contained in the trap, and move within
    //Show the success comfirmation message: K.O.
  } 
}
*/