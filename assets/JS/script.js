
// Variable that displays the date by Day, Month & Date 
var currentDate = moment().format('dddd, MMMM Do');

// Display current day
$('#date-display').text(currentDate);

// Provides a 24 hour clock
var currentHour = moment().hours();

//Save Events to Local Storage using "this"
$('.saveBtn').on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value);
});

// Need to display past, current or future below with a for loop 
var idArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (var i = 0; i < idArr.length; i++) {
    $('#' + idArr[i] + ' textarea').val(localStorage.getItem(idArr[i]))
}
//Targeted each time block, added a variable rowHour and passed the attribute of id to it which then got parsed to be a number.
$('.time-block').each(function () {
    var rowHour = $(this).attr('id')
    rowHour = parseInt(rowHour)
//Depending on the hour, if in the past, present or future, those classes were added
    if (rowHour < currentHour) {
        // add a class of past
        $(this).addClass('past')
    } else if (rowHour === currentHour) {
        // add a class of present
        $(this).addClass('present')
    } else {
        // add a class of future
        $(this).addClass('future')
    }
})