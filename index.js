
var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
console.log(n);
if (n===1){
  document.querySelectorAll("img")[0].setAttribute("src","dice1.png");



}
  else if(n===2){
document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
}

else if(n===3){
document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
}
else if(n===4){
document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
}
else if(n===5){
document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
}else {
document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
}
var m=Math.random();
m=m*6;
m=Math.floor(m)+1;
console.log(m);
  if (m===1){
    document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
  }
    else if(m===2){
  document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
  }

  else if(m===3){
  document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
  }
  else if(m===4){
  document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
  }
  else if(m===5){
  document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
  }else {
  document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
  }

if(n>m)

{
  document.querySelector("h1").textContent="Player 1 is winner";

}
else if(n<m)
{
 document.querySelector("h1").textContent="Player 2 is winner";
}
else{
  document.querySelector("h1").textContent="Draw";
}
