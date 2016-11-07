playerCash = [];
playerInfamy = [];
playerCount = 0;

var cashPlayer = function(index){
  change = calculateCashChange(index);
  playerCash[index] = playerCash[index] + change;
  var id = getId(index, "cash");
  setValueById(id, playerCash[index]);
  loseCashChance(index);
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
  return preciseRound(change - randomCashLoss(change));
}

var randomCashLoss = function(value){
  var num = Math.random();
  if(value < 0){
    return -value * num;
  }
  return value * num;
}

var loseCashChance = function(index){
  var num = Math.random();
  if(num >= 0.9){
    var id = getId(index, "cash");
    playerCash[index] = playerCash[index] - 100;
    setValueById(id, playerCash[index]);
  }
}

var infamyPlayer = function(index){
  var infamy = playerInfamy[index];
  var id = getId(index, "change");
  var change = getValueById(id);
  change = playerInfamy[index] + randomInfamy(change);
  playerInfamy[index] = change;
  id = getId(index, "infamy");
  loseCashChance(index);
  checkLossCash(index)
  setValueById(id, playerInfamy[index]);
}

var randomInfamy = function(value){
  var num = Math.random();
  if(value < 0){
    return value;
  }
  console.log(Math.round(value * num));
  return Math.round(value * num);
}

var getId = function(index, suffix){
  var id = "player" + String(index + 1) + suffix;
  return id;
}

var init = function(){
  playerCount = prompt("How many players?");
  setBaseDom();
  setBaseValues();
  setBaseDomValues();
}

var setBaseDom = function(){
  for(var i = 0; i < playerCount; i++){
    var dom = formatPlayerDom(i);
    appendToId("players", dom);
  }
}

var formatPlayerDom = function(index){
  var dom = 'Player ' + String(index+1) + ':' +
      '<div>' +
      'Cash: <label id="' + getId(index, "cash") + '">$0</label><br/>' +
      'Infamy: <label id="' + getId(index, "infamy") + '">0</label><br/>' +
      'Amount: <input id="' + getId(index, "change") + '" type="number"><br>' +
      '<button onclick="cashPlayer(' + index + ')">Change Cash</button>' +
      '<button onclick="infamyPlayer(' + index + ')">Change Infamy</button>' +
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

init();
