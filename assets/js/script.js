var today = moment();
var hourBlocks = []; 

$("input").each(function() {
    hourBlocks.push($(this).attr("data-time"));
});

console.log("plx", hourBlocks)


$('#currentDay').text(today.format("dddd[,] MMM Do"))

function colorChange() {
    var timeNow = 13;

    for (var i=0; i < hourBlocks.length; i++) {
        
        var dataTime = hourBlocks[i]
        
        if (timeNow == dataTime.value) {
            $("input").css("background-color", "#ff6961");
        } else if (timeNow > dataTime) {
            $("input").css("background-color", "#d3d3d3");
        } else {
            $("input").css("background-color", "#77dd77");
        }
    }
}

colorChange();