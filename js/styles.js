function rolldice() {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML = "You rolled "+diceTotal+"...";
  if (d1 == d2) {
    status.innerHTML += " DOUBLES! You get a bonus win!!";
    }
    else if (d2 == 1) {
      status.innerHTML = "YOU LOOSE!!!!";
    }
    else if (d1 == 1) {
      status.innerHTML = "YOU LOOSE!!!!";
    }
  };
// function hold() { 
//   var finalScore = 0 += diceTotal;
//   finalScore.innerHTML = "You won "+finalScore+"."
// }