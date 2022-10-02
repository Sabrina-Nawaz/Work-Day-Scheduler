$(document).ready(function () {
    // Variable that displays the date in shorthand Day then Month, Date, Year & Time 
    var currentDate = moment().format('llll');

    // Display current day
    var displayDate = $('#currentDay');
    displayDate.text(currentDate);

    //Save Events to Local Storage using "this"
    $('.saveBtn').click(function() {
    $(this).value; 
     localStorage.setItem('save9', hr9);
    /*var hour9 = document.getElementById('hr9').value;
    localStorage.setItem('save9', hour9);
    }); */

});

// Need to display past, current or future below with a for loop 