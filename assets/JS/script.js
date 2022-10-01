$(document).ready(function () {
    // Variable that displays the date in shorthand Day then Month, Date, Year & Time 
    var currentDate = moment().format('llll');

    // Display current day
    var displayDate = $('#currentDay');
    displayDate.text(currentDate);



});
