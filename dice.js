var rndNum1 = Math.floor(Math.random() * 6) + 1;
var rndNum2 = Math.floor(Math.random() * 6) + 1;

var rndImg1 = "images/dice" + rndNum1 + ".png";
var rndImg2 = "images/dice" + rndNum2 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", rndImg1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", rndImg2);


  if (rndNum1 > rndNum2) {
      document.querySelector("h1").innerText = "Player 1 Wins!";
}

else if (rndNum1 < rndNum2){
    document.querySelector("h1").innerText = "Player 2 Wins!";
}

else {
    document.querySelector("h1").innerText = "Draw!";
  }