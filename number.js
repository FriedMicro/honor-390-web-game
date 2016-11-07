var preciseRound = function(num) {
  num = num * 100;
  num = num / 100;
  return Math.round(num);
}
