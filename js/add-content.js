// Greetings per time of day

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {//6:00 PM
  greeting = 'Good evening!';
} else if (hourNow > 12) { //12:00 PM
  greeting = 'Good afternoon!';
} else if (hourNow > 0) { //12:00 Midnight
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
// document.write('<h3>' + greeting + '</h3>');
document.getElementById('greeting').innerHTML=greeting;


// Slide Show Review //
var i = 0;
var images = [];
var time = 1000;

images[0] = 'img/award_01.jpg';
images[1] = 'img/award_02.jpg';
images[2] = 'img/award_03.jpg';

function changeImg(){
  document.slide.src = images[i];

if(i < images.length - 1){
  i++;
} else {
  i = 0;
}
setTimeout("changeImg()", 3000);
}
window.onload = changeImg;
