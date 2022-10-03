$(document).ready(function () {
    // Variable that displays the date in shorthand Day then Month, Date, Year & Time 
    var currentDate = moment().format('dddd, MMMM Do');

    // Display current day
   $('#date-display').text(currentDate);

   var currentHour = moment().format('H'); // gives 24 hr clock

   if (currentHour >= 9) {
    for (i = 0; i <= currentHour - 9; i++) {
        if (currentHour - 9 === i) {
            $('#' + i).attr('class', 'present');
        } else {
            $('#' + i).attr('class', 'past');
        }
    }
   }

    //Save Events to Local Storage using "this"
    /*$('.saveBtn').click(function() {
    /$(this).parent('div')/*$("button:nth-of-type").value; 
    /*localStorage.setItem('save9', hr9);
    /*var hour9 = document.getElementById('hr9').value;
    localStorage.setItem('save9', hour9);
    }); */

});


// Need to display past, current or future below with a for loop 
//start loop after 9 am, 