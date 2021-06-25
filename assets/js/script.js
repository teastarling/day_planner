var today = moment();
var []

$('#currentDay').text(today.format("dddd[,] MMM Do"))

function colorChange() {
    var timeNow = moment().format("k");

    for (var i=9; i < 18; i++) {
        if (timeNow == i) {           
            document.querySelector('[data-time="'+ i +'"]').style.backgroundColor = "#ff6961";
        } else if (timeNow > i) {
            document.querySelector('[data-time="'+ i +'"]').style.backgroundColor = "#d3d3d3";
        } else {
            document.querySelector('[data-time="'+ i +'"]').style.backgroundColor = "#77dd77";
        }
    }
}


colorChange();