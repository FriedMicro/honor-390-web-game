//Helper functions to alter dom

var getValueById = function(id){
  var element = document.getElementById(id);
  var value = element.innerHTML;
  if(value == ""){
    value = element.value;
  }
  if(!isNaN(value)){
    value = Number(value);
  }
  return value;
}

var setValueById = function(id, string){
  document.getElementById(id).innerHTML = string;
}

var appendToId = function(id, dom){
  document.getElementById(id).innerHTML += dom;
}
