var nextHourly = document.getElementById("nextHourly");
var prevHourly = document.getElementById("prevHourly");
var cardWeather = document.getElementById("cardWeather");
var NEXT = 1;
var PREV = 2;

nextHourly.addEventListener('click', function() {
    moveCardHourly(NEXT);
});
prevHourly.addEventListener('click', function() {
    moveCardHourly(PREV);
});

var moveCardHourly = function(moveType) {
    let margin = cardWeather.style.marginLeft;
    margin = margin.match(/[\d|-]/g);
    if (margin == null) {
        margin = 0;
    } else {
        margin = margin.join("");
    }

    margin = parseInt(margin);
    if (moveType === NEXT) {
        margin = margin - 1150;
        if (margin < -1600)
            margin = -1600;
    } else if (moveType === PREV) {
        margin = margin + 1150;
        if (margin > 0)
            margin = 0;
    }
    cardWeather.style.marginLeft = margin + "px";
}