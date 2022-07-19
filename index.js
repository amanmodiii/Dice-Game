var name1 = "Player1";
var name2 = "Player2";

name1 = prompt("Enter player 1's name : ");
document.querySelector(".pl1").innerHTML=name1;

name2 = prompt("Enter player2's name : ");
document.querySelector(".pl2").innerHTML=name2;

document.querySelector(".btn").addEventListener("click",function (){

  var randomNumber1=Math.floor(Math.random()*6+1);
  document.querySelector(".image1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2=Math.floor(Math.random()*6+1);
  document.querySelector(".image2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent=name1 + " wins."
  }
  else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent=name2 + " wins."
  }
  else{
    document.querySelector("h1").textContent="It's a Draw."
  }
});
