$(document).foundation()
var today = Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {//6:00 PM
 greeting = 'Good evening!';
} else if (hourNow > 12) { //12:00 PM
 greeting = 'Good afternoon!';
} else if (hourNow > 0) { //12:00 Midnight
 greeting = 'Good morning!';
} else {
 greeting = 'Welcome';
}
document.write('<h3>' + greeting +'</h3>');
