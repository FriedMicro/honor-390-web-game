playerCash = [];
playerInfamy = [];
playerCount = 0;
password = "";

var cashPlayer = function(index){
  change = calculateCashChange(index);
  playerCash[index] = playerCash[index] + change;
  var id = getId(index, "cash");
  setValueById(id, playerCash[index]);
  checkLossCash(index);
}

var checkLossCash = function(index){
  if(playerCash[index] <= 0){
    var message = "Player " + String(index + 1) + ": has been removed from the game."
    alert(message);
  }
}

var calculateCashChange = function(index){
  var id = getId(index, "change");
  var infamy = playerInfamy[index];
  var change = getValueById(id);
  if(change > 0){
    change = change - change * infamy/10;
  } else {
    change = change - Math.abs(change * infamy/10);
  }
  return preciseRound(change);
}

var infamyPlayer = function(index){
  var infamy = playerInfamy[index];
  var id = getId(index, "change");
  var change = getValueById(id);
  change = playerInfamy[index] + randomInfamy(change);
  playerInfamy[index] = change;
  id = getId(index, "infamy");
  checkLossCash(index)
  setValueById(id, playerInfamy[index]);
}

var randomInfamy = function(value){
  var num = Math.random();
  if(value < 0){
    return value;
  }
  var change = Math.round(value * num);
  alert("Infamy added: " + change);
  return change;
}

var getId = function(index, suffix){
  var id = "player" + String(index + 1) + suffix;
  return id;
}

var init = function(){
  playerCount = prompt("How many players?");
  password = prompt("What GM password would you like?");
  setBaseDom();
  setBaseValues();
  setBaseDomValues();
  setActivePlayer();
}

var setBaseDom = function(){
  for(var i = 0; i < playerCount; i++){
    var dom = formatPlayerDom(i);
    appendToId("players", dom);
  }
}

var setActivePlayer = function(){
  setStylingById("player1", "display:block");
}

var formatPlayerDom = function(index){
  var dom = '<div id="player' + String(index+1) + '" style="display:none">Player ' + String(index+1) + ':' +
      '<div>' +
      'Cash: <label id="' + getId(index, "cash") + '">$0</label><br/>' +
      'Infamy: <label id="' + getId(index, "infamy") + '">0</label><br/>' +
      'Amount: <input id="' + getId(index, "change") + '" type="number"><br>' +
      '<button onclick="cashPlayer(' + index + ')">Change Cash</button>' +
      '<button onclick="infamyPlayer(' + index + ')">Change Infamy</button>' +
      '</div>' +
      '<button onclick="goToNextPlayer(' + index + ')">Go to Next Player' +
      '</div>';
    return dom;
}

var setBaseValues = function(){
  for(var i = 0; i < playerCount; i++){
    playerCash.push(2000);
    playerInfamy.push(0);
  }
}

var setBaseDomValues = function(){
  for(var i = 0; i < playerCount; i++){
    var id = getId(i, "cash");
    setValueById(id, playerCash[i]);
    var id = getId(i, "infamy");
    setValueById(id, playerInfamy[i]);
  }
}

var goToNextPlayer = function(index){
  playerCash[index] = playerCash[index] - 400;
  setStylingById("player"+ String(index+1), "display:none");
  index++;
  if(index + 1 > playerCount){
    index = 0;
  }
  setStylingById("player"+ String(index+1), "display:block");
}

var changeAnotherPlayer = function(){
  if(prompt("Enter GM password") != password){
    alert("Invalid password");
    return;
  }
  var playerNumber = Number(prompt("Which player will this affect?"));
  var type = Number(prompt("1: fame or 2: money change?"));
  var amount = Number(prompt("Quanity"));
  if(type == 1){
    playerInfamy[playerNumber-1] += amount;
    var id = getId(playerNumber - 1, "infamy");
    setValueById(id, playerInfamy[playerNumber - 1]);
  } else if(type == 2){
    playerCash[playerNumber-1] += amount;
    checkLossCash(playerNumber - 1);
    var id = getId(playerNumber - 1, "cash");
    setValueById(id, playerCash[playerNumber - 1]);
  } else {
    alert("invalid choice");
  }
}


init();
