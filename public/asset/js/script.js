var nextHourly = document.getElementById("nextHourly");
var prevHourly = document.getElementById("prevHourly");
var cardWeather = document.getElementById("hourlyWeatherCard");
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

//weekly chart
const labels = [];
const DATA_COUNT = 8;
for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
}
const datapoints1 = [28, 26, 28, 33, 31, 29, 30, 30];
const datapoints2 = [24, 22, 22, 24, 22, 23, 24, 24];
const data = {
    labels: labels,
    datasets: [{
        label: '',
        backgroundColor: '#ff9900',
        borderColor: '#ff9900',
        data: datapoints1,
        fill: false,
        tension: 0.3
    }, {
        label: '',
        backgroundColor: '#0099ff',
        borderColor: '#0099ff',
        data: datapoints2,
        fill: false,
        tension: 0.3
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 0
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                labels: {
                    title: {
                        font: {
                            size: 18,
                        }
                    }
                },
                clamp: true,
                anchor: 'end',
                align: 'top',
                offset: 2,
                formatter: function(value, context) {
                    return value + "°";
                }

            }
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
                beginAtZero: true
            }
        },
    }
};
Chart.register(ChartDataLabels);
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
