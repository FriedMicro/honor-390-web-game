playerCash = [2000, 2000];
playerInfamy = [0, 0];
var cashPlayer = function(index){
  var change = 0;
  var infamy = playerInfamy[index];
  if(index == 0){
    change = document.getElementById("player1change").value;
  } else {
    change = document.getElementById("player2change").value;
  }
  if(change > 0){
    change = change - change * infamy/10;
  } else {
    change = change - Math.abs(change * infamy/10);
  }
  playerCash[index] = playerCash[index] + change;
  if(index == 0){
    document.getElementById("player1cash").innerHTML = playerCash[index];
  } else {
    document.getElementById("player2cash").innerHTML = playerCash[index];
  }
}

var infamyPlayer = function(index){
  var change = 0;
  var infamy = playerInfamy[index];
  if(index == 0){
    change = document.getElementById("player1change").value;
  } else {
    change = document.getElementById("player2change").value;
  }
  if(change > 0){
    change = change - change * infamy/10;
  } else {
    change = change - Math.abs(change * infamy/10);
  }
  playerInfamy[index] = playerInfamy[index] + change;
  if(index == 0){
    document.getElementById("player1infamy").innerHTML = playerInfamy[index];
  } else {
    document.getElementById("player2infamy").innerHTML = playerInfamy[index];
  }
}
var init = function(){
  document.getElementById("player1cash").innerHTML = playerCash[0];
  document.getElementById("player2cash").innerHTML = playerCash[1];
  document.getElementById("player1infamy").innerHTML = playerInfamy[0];
  document.getElementById("player2infamy").innerHTML = playerInfamy[1];
}

var checkLossInfamy = function(){

}

var checkLossCash = function(){

}

init();
