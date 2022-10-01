$(document).ready(function () {

var today_date = moment().format('MMMM Do YYYY, h:mm:ss a'); // September 30th 2022, 10:34:08 am

console.log(today_date); 

console.log("test");

document.getElementById("today").innerHTML = today_date;

});