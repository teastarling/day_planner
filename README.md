# Weekly Day Planner

Utilizing JQuery, Moment.js, and Bootstrap, this site shows users the current day and blocks encompassing usual office hours (9A-5P) which change color depending on the current hour on page load. Tasks can be written into the input field for each hour and saved to local storage in order to retain tasks even if the page is exited and later returned to.

## Screen Shot and Deployed Site

Site appearance on load [here](./assets/images/dayschedule.png).
While deployed site can be found [here](https://teastarling.github.io/day_planner/)


## Usage

```jquery
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
```
