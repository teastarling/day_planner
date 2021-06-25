// variables to declare time (current) for functions below
var today = moment();
var currentHour = today.hours();
//  moment.js jquery command to run the current day in the format of the day of the week, followed by the month and the date
$('#currentDay').text(today.format("dddd[,] MMM Do"));
// function to save the information placed in the button sibling input field when the save buttons are clicked; information is saved with the id of the input element used as the local storage key
$(".btn").click(function(){
    var id = $(this).siblings(".form-control").attr("id");
    var task = $(this).siblings(".form-control").val();
    localStorage.setItem(id, task);
})
// when page loads, each input group runs through local storage and assigns any local storage items with a key that matches the child input element's id to the input field. After that, an if/else statement to color the blocks is run, still using the parent "input-group" class object as the main header and the child input element to compare the id to the global variable "currentHour" that is able to find the current hour using moment.js methods, and then draw the css color parameters from the css documents by adding the class do that element based on the boolean of the if/else statements
$('.input-group').each(function() {
    var id = $(this).children(".form-control").attr("id");
    var task = localStorage.getItem(id);

    $(this).children(".form-control").val(task);

    if (id > currentHour) {           
            $(this).children(".form-control").addClass("future");
    } else if (id < currentHour) {
            $(this).children(".form-control").addClass("past");
    } else {
            $(this).children(".form-control").addClass("present");
    }
    });
