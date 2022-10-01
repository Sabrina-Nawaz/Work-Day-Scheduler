$(document).ready(function () {
    // Variable that displays the date in Day then Month, Date, Year & Time 
    var currentDate = moment().format('LLLL'); // Day, M/D/Y/T format

    // Display current day
    var displayDate = $('#currentDay');
    displayDate.text(currentDate);



});
