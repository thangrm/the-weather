var nextHourly = document.getElementById("nextHourly");
var prevHourly = document.getElementById("prevHourly");
var cardWeather = document.getElementById("hourlyWeatherCard");
var NEXT = "NEXT";
var PREV = "PREV";

nextHourly.addEventListener('click', function () {
    moveCardHourly(NEXT);
});
prevHourly.addEventListener('click', function () {
    moveCardHourly(PREV);
});

var moveCardHourly = function (moveType) {
    let margin = cardWeather.style.marginLeft;
    margin = margin.match(/[\d|-]/g);
    if (margin == null) {
        margin = 0;
    } else {
        margin = margin.join("");
    }

    let step = 1150;
    let limitMargin = -1600;
    if (screen.width >= 1400) {
        step = 1150;
        limitMargin = -1600;
    } else if (screen.width >= 1200) {
        step = 768;
        limitMargin = -1880;
    }

    margin = parseInt(margin);
    if (moveType === NEXT) {
        margin = margin - step;
        if (margin < limitMargin)
            margin = limitMargin;
    } else if (moveType === PREV) {
        margin = margin + step;
        if (margin > 0)
            margin = 0;
    }
    cardWeather.style.marginLeft = margin + "px";
}

//Draw Weekly Chart
function drawWeatherChart(datapoints1, datapoints2) {
    let labels = [];
    let DATA_COUNT = 8;
    for (let i = 0; i < DATA_COUNT; ++i) {
        labels.push(i.toString());
    }

    let data = {
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

    let config = {
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
                    formatter: function (value, context) {
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
            responsive: true,
            maintainAspectRatio: false
        }
    };
    Chart.register(ChartDataLabels);
    let myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}


var weather = JSON.parse(`{
    "lat": 21.12,
    "lon": 105.88,
    "timezone": "Asia/Bangkok",
    "timezone_offset": 25200,
    "current": {
        "dt": 1637396442,
        "sunrise": 1637363409,
        "sunset": 1637403258,
        "temp": 27,
        "feels_like": 29.2,
        "pressure": 1006,
        "humidity": 74,
        "dew_point": 21.97,
        "uvi": 1.37,
        "clouds": 75,
        "visibility": 3200,
        "wind_speed": 1.03,
        "wind_deg": 310,
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "đám mây",
                "icon": "50d"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1637395200,
            "temp": 27,
            "feels_like": 29.2,
            "pressure": 1006,
            "humidity": 74,
            "dew_point": 21.97,
            "uvi": 1.37,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 3.55,
            "wind_deg": 146,
            "wind_gust": 5.98,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.22
        },
        {
            "dt": 1637398800,
            "temp": 27.05,
            "feels_like": 29.2,
            "pressure": 1006,
            "humidity": 73,
            "dew_point": 21.79,
            "uvi": 0.48,
            "clouds": 77,
            "visibility": 10000,
            "wind_speed": 3.88,
            "wind_deg": 149,
            "wind_gust": 6.38,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.17
        },
        {
            "dt": 1637402400,
            "temp": 26.49,
            "feels_like": 26.49,
            "pressure": 1006,
            "humidity": 75,
            "dew_point": 21.7,
            "uvi": 0.09,
            "clouds": 75,
            "visibility": 10000,
            "wind_speed": 3.75,
            "wind_deg": 147,
            "wind_gust": 7.05,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.13
        },
        {
            "dt": 1637406000,
            "temp": 25.54,
            "feels_like": 26.19,
            "pressure": 1007,
            "humidity": 78,
            "dew_point": 21.42,
            "uvi": 0,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 3.52,
            "wind_deg": 144,
            "wind_gust": 7.6,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.11
        },
        {
            "dt": 1637409600,
            "temp": 24.7,
            "feels_like": 25.37,
            "pressure": 1008,
            "humidity": 82,
            "dew_point": 21.42,
            "uvi": 0,
            "clouds": 72,
            "visibility": 10000,
            "wind_speed": 3.35,
            "wind_deg": 139,
            "wind_gust": 8.59,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.09
        },
        {
            "dt": 1637413200,
            "temp": 23.8,
            "feels_like": 24.48,
            "pressure": 1010,
            "humidity": 86,
            "dew_point": 21.35,
            "uvi": 0,
            "clouds": 76,
            "visibility": 10000,
            "wind_speed": 3.31,
            "wind_deg": 139,
            "wind_gust": 8.73,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.09
        },
        {
            "dt": 1637416800,
            "temp": 23.51,
            "feels_like": 24.21,
            "pressure": 1011,
            "humidity": 88,
            "dew_point": 21.42,
            "uvi": 0,
            "clouds": 76,
            "visibility": 10000,
            "wind_speed": 3.08,
            "wind_deg": 140,
            "wind_gust": 8.52,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.09
        },
        {
            "dt": 1637420400,
            "temp": 23.32,
            "feels_like": 24.06,
            "pressure": 1011,
            "humidity": 90,
            "dew_point": 21.51,
            "uvi": 0,
            "clouds": 78,
            "visibility": 10000,
            "wind_speed": 2.98,
            "wind_deg": 144,
            "wind_gust": 8.91,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.07
        },
        {
            "dt": 1637424000,
            "temp": 23.28,
            "feels_like": 24.01,
            "pressure": 1011,
            "humidity": 90,
            "dew_point": 21.61,
            "uvi": 0,
            "clouds": 83,
            "visibility": 10000,
            "wind_speed": 2.5,
            "wind_deg": 142,
            "wind_gust": 7.78,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.13
        },
        {
            "dt": 1637427600,
            "temp": 23.24,
            "feels_like": 24,
            "pressure": 1011,
            "humidity": 91,
            "dew_point": 21.69,
            "uvi": 0,
            "clouds": 86,
            "visibility": 10000,
            "wind_speed": 2.24,
            "wind_deg": 137,
            "wind_gust": 7.21,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.37,
            "rain": {
                "1h": 0.11
            }
        },
        {
            "dt": 1637431200,
            "temp": 23.18,
            "feels_like": 23.96,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 21.71,
            "uvi": 0,
            "clouds": 88,
            "visibility": 10000,
            "wind_speed": 2.1,
            "wind_deg": 133,
            "wind_gust": 6.8,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.22,
            "rain": {
                "1h": 0.14
            }
        },
        {
            "dt": 1637434800,
            "temp": 23.12,
            "feels_like": 23.89,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 21.71,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.03,
            "wind_deg": 124,
            "wind_gust": 5.93,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.57,
            "rain": {
                "1h": 0.17
            }
        },
        {
            "dt": 1637438400,
            "temp": 23.03,
            "feels_like": 23.79,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 21.65,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.97,
            "wind_deg": 112,
            "wind_gust": 4.66,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.67,
            "rain": {
                "1h": 0.25
            }
        },
        {
            "dt": 1637442000,
            "temp": 23,
            "feels_like": 23.76,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 21.56,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.99,
            "wind_deg": 106,
            "wind_gust": 4.26,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.73,
            "rain": {
                "1h": 0.22
            }
        },
        {
            "dt": 1637445600,
            "temp": 22.97,
            "feels_like": 23.72,
            "pressure": 1010,
            "humidity": 92,
            "dew_point": 21.56,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.05,
            "wind_deg": 104,
            "wind_gust": 4.35,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.77,
            "rain": {
                "1h": 0.2
            }
        },
        {
            "dt": 1637449200,
            "temp": 22.94,
            "feels_like": 23.69,
            "pressure": 1011,
            "humidity": 92,
            "dew_point": 21.52,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2,
            "wind_deg": 103,
            "wind_gust": 4.06,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.77,
            "rain": {
                "1h": 0.28
            }
        },
        {
            "dt": 1637452800,
            "temp": 22.98,
            "feels_like": 23.71,
            "pressure": 1012,
            "humidity": 91,
            "dew_point": 21.5,
            "uvi": 0.02,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.84,
            "wind_deg": 104,
            "wind_gust": 4.17,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.81,
            "rain": {
                "1h": 0.3
            }
        },
        {
            "dt": 1637456400,
            "temp": 23.37,
            "feels_like": 24.09,
            "pressure": 1013,
            "humidity": 89,
            "dew_point": 21.53,
            "uvi": 0.24,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 1.63,
            "wind_deg": 111,
            "wind_gust": 4.39,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.67,
            "rain": {
                "1h": 0.38
            }
        },
        {
            "dt": 1637460000,
            "temp": 24.56,
            "feels_like": 25.24,
            "pressure": 1013,
            "humidity": 83,
            "dew_point": 21.42,
            "uvi": 0.65,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.42,
            "wind_deg": 141,
            "wind_gust": 5.62,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.57,
            "rain": {
                "1h": 0.36
            }
        },
        {
            "dt": 1637463600,
            "temp": 26.17,
            "feels_like": 26.17,
            "pressure": 1013,
            "humidity": 73,
            "dew_point": 21.08,
            "uvi": 1.19,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 4.03,
            "wind_deg": 159,
            "wind_gust": 6.37,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.61,
            "rain": {
                "1h": 0.33
            }
        },
        {
            "dt": 1637467200,
            "temp": 27,
            "feels_like": 28.77,
            "pressure": 1013,
            "humidity": 69,
            "dew_point": 20.88,
            "uvi": 3.31,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 4.69,
            "wind_deg": 157,
            "wind_gust": 6.27,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.65,
            "rain": {
                "1h": 0.3
            }
        },
        {
            "dt": 1637470800,
            "temp": 27.52,
            "feels_like": 29.45,
            "pressure": 1012,
            "humidity": 67,
            "dew_point": 20.75,
            "uvi": 3.64,
            "clouds": 95,
            "visibility": 10000,
            "wind_speed": 4.9,
            "wind_deg": 154,
            "wind_gust": 6.04,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.7,
            "rain": {
                "1h": 0.26
            }
        },
        {
            "dt": 1637474400,
            "temp": 28.06,
            "feels_like": 30.01,
            "pressure": 1010,
            "humidity": 64,
            "dew_point": 20.71,
            "uvi": 3.26,
            "clouds": 91,
            "visibility": 10000,
            "wind_speed": 5.07,
            "wind_deg": 153,
            "wind_gust": 6,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "pop": 0.64,
            "rain": {
                "1h": 0.18
            }
        },
        {
            "dt": 1637478000,
            "temp": 28.2,
            "feels_like": 30.12,
            "pressure": 1010,
            "humidity": 63,
            "dew_point": 20.6,
            "uvi": 3.76,
            "clouds": 80,
            "visibility": 10000,
            "wind_speed": 4.83,
            "wind_deg": 152,
            "wind_gust": 5.79,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.48
        },
        {
            "dt": 1637481600,
            "temp": 28.27,
            "feels_like": 30.23,
            "pressure": 1009,
            "humidity": 63,
            "dew_point": 20.52,
            "uvi": 2.02,
            "clouds": 77,
            "visibility": 10000,
            "wind_speed": 4.43,
            "wind_deg": 151,
            "wind_gust": 5.54,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.46
        },
        {
            "dt": 1637485200,
            "temp": 28.05,
            "feels_like": 29.99,
            "pressure": 1009,
            "humidity": 64,
            "dew_point": 20.61,
            "uvi": 0.71,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 4.06,
            "wind_deg": 149,
            "wind_gust": 5.41,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.33
        },
        {
            "dt": 1637488800,
            "temp": 26.67,
            "feels_like": 28.31,
            "pressure": 1010,
            "humidity": 70,
            "dew_point": 20.76,
            "uvi": 0.07,
            "clouds": 65,
            "visibility": 10000,
            "wind_speed": 3.15,
            "wind_deg": 142,
            "wind_gust": 5.52,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04d"
                }
            ],
            "pop": 0.25
        },
        {
            "dt": 1637492400,
            "temp": 25.43,
            "feels_like": 25.99,
            "pressure": 1011,
            "humidity": 75,
            "dew_point": 20.73,
            "uvi": 0,
            "clouds": 56,
            "visibility": 10000,
            "wind_speed": 2.88,
            "wind_deg": 132,
            "wind_gust": 5.5,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.2
        },
        {
            "dt": 1637496000,
            "temp": 24.83,
            "feels_like": 25.41,
            "pressure": 1012,
            "humidity": 78,
            "dew_point": 20.76,
            "uvi": 0,
            "clouds": 52,
            "visibility": 10000,
            "wind_speed": 3.12,
            "wind_deg": 127,
            "wind_gust": 6.35,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "mây cụm",
                    "icon": "04n"
                }
            ],
            "pop": 0.2
        },
        {
            "dt": 1637499600,
            "temp": 24.31,
            "feels_like": 24.91,
            "pressure": 1013,
            "humidity": 81,
            "dew_point": 20.79,
            "uvi": 0,
            "clouds": 33,
            "visibility": 10000,
            "wind_speed": 3.06,
            "wind_deg": 125,
            "wind_gust": 6.51,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "mây rải rác",
                    "icon": "03n"
                }
            ],
            "pop": 0.05
        },
        {
            "dt": 1637503200,
            "temp": 23.88,
            "feels_like": 24.49,
            "pressure": 1013,
            "humidity": 83,
            "dew_point": 20.78,
            "uvi": 0,
            "clouds": 34,
            "visibility": 10000,
            "wind_speed": 2.77,
            "wind_deg": 121,
            "wind_gust": 5.84,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "mây rải rác",
                    "icon": "03n"
                }
            ],
            "pop": 0.05
        },
        {
            "dt": 1637506800,
            "temp": 23.57,
            "feels_like": 24.18,
            "pressure": 1014,
            "humidity": 84,
            "dew_point": 20.72,
            "uvi": 0,
            "clouds": 35,
            "visibility": 10000,
            "wind_speed": 2.51,
            "wind_deg": 116,
            "wind_gust": 5,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "mây rải rác",
                    "icon": "03n"
                }
            ],
            "pop": 0.08
        },
        {
            "dt": 1637510400,
            "temp": 23.37,
            "feels_like": 23.98,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 20.63,
            "uvi": 0,
            "clouds": 36,
            "visibility": 10000,
            "wind_speed": 2.35,
            "wind_deg": 111,
            "wind_gust": 4.27,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "mây rải rác",
                    "icon": "03n"
                }
            ],
            "pop": 0.1
        },
        {
            "dt": 1637514000,
            "temp": 23.27,
            "feels_like": 23.87,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 20.54,
            "uvi": 0,
            "clouds": 44,
            "visibility": 10000,
            "wind_speed": 2.21,
            "wind_deg": 106,
            "wind_gust": 4,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "mây rải rác",
                    "icon": "03n"
                }
            ],
            "pop": 0.14
        },
        {
            "dt": 1637517600,
            "temp": 23.08,
            "feels_like": 23.66,
            "pressure": 1014,
            "humidity": 85,
            "dew_point": 20.35,
            "uvi": 0,
            "clouds": 53,
            "visibility": 10000,
            "wind_speed": 3.1,
            "wind_deg": 64,
            "wind_gust": 6.03,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.36,
            "rain": {
                "1h": 0.19
            }
        },
        {
            "dt": 1637521200,
            "temp": 21.9,
            "feels_like": 22.29,
            "pressure": 1014,
            "humidity": 82,
            "dew_point": 18.68,
            "uvi": 0,
            "clouds": 93,
            "visibility": 10000,
            "wind_speed": 6.16,
            "wind_deg": 37,
            "wind_gust": 9.54,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.58,
            "rain": {
                "1h": 0.27
            }
        },
        {
            "dt": 1637524800,
            "temp": 20.47,
            "feels_like": 20.61,
            "pressure": 1015,
            "humidity": 78,
            "dew_point": 16.42,
            "uvi": 0,
            "clouds": 97,
            "visibility": 10000,
            "wind_speed": 7.64,
            "wind_deg": 33,
            "wind_gust": 12.13,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10n"
                }
            ],
            "pop": 0.61,
            "rain": {
                "1h": 0.21
            }
        },
        {
            "dt": 1637528400,
            "temp": 19.8,
            "feels_like": 19.79,
            "pressure": 1015,
            "humidity": 75,
            "dew_point": 15.26,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 8.31,
            "wind_deg": 33,
            "wind_gust": 13.33,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04n"
                }
            ],
            "pop": 0.66
        },
        {
            "dt": 1637532000,
            "temp": 19.16,
            "feels_like": 19.04,
            "pressure": 1016,
            "humidity": 73,
            "dew_point": 14.28,
            "uvi": 0,
            "clouds": 98,
            "visibility": 10000,
            "wind_speed": 8.68,
            "wind_deg": 32,
            "wind_gust": 14.22,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04n"
                }
            ],
            "pop": 0.62
        },
        {
            "dt": 1637535600,
            "temp": 18.77,
            "feels_like": 18.53,
            "pressure": 1017,
            "humidity": 70,
            "dew_point": 13.28,
            "uvi": 0,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 8.66,
            "wind_deg": 33,
            "wind_gust": 14.4,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04n"
                }
            ],
            "pop": 0.62
        },
        {
            "dt": 1637539200,
            "temp": 18.25,
            "feels_like": 17.93,
            "pressure": 1018,
            "humidity": 69,
            "dew_point": 12.54,
            "uvi": 0.01,
            "clouds": 99,
            "visibility": 10000,
            "wind_speed": 8.63,
            "wind_deg": 30,
            "wind_gust": 14.83,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.58
        },
        {
            "dt": 1637542800,
            "temp": 17.92,
            "feels_like": 17.54,
            "pressure": 1019,
            "humidity": 68,
            "dew_point": 12.03,
            "uvi": 0.14,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 8.14,
            "wind_deg": 26,
            "wind_gust": 14.28,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.26
        },
        {
            "dt": 1637546400,
            "temp": 17.87,
            "feels_like": 17.46,
            "pressure": 1020,
            "humidity": 67,
            "dew_point": 11.73,
            "uvi": 0.38,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.31,
            "wind_deg": 24,
            "wind_gust": 13.3,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.17
        },
        {
            "dt": 1637550000,
            "temp": 17.7,
            "feels_like": 17.28,
            "pressure": 1020,
            "humidity": 67,
            "dew_point": 11.43,
            "uvi": 0.69,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.6,
            "wind_deg": 22,
            "wind_gust": 13.38,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.16
        },
        {
            "dt": 1637553600,
            "temp": 17.62,
            "feels_like": 17.13,
            "pressure": 1020,
            "humidity": 65,
            "dew_point": 11.09,
            "uvi": 1.46,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.88,
            "wind_deg": 20,
            "wind_gust": 13.49,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.13
        },
        {
            "dt": 1637557200,
            "temp": 17.47,
            "feels_like": 16.94,
            "pressure": 1020,
            "humidity": 64,
            "dew_point": 10.67,
            "uvi": 1.61,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 8.07,
            "wind_deg": 23,
            "wind_gust": 13.25,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.08
        },
        {
            "dt": 1637560800,
            "temp": 17.28,
            "feels_like": 16.71,
            "pressure": 1019,
            "humidity": 63,
            "dew_point": 10.17,
            "uvi": 1.44,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.83,
            "wind_deg": 26,
            "wind_gust": 12.95,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.04
        },
        {
            "dt": 1637564400,
            "temp": 17.43,
            "feels_like": 16.82,
            "pressure": 1018,
            "humidity": 61,
            "dew_point": 9.92,
            "uvi": 1.56,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 7.57,
            "wind_deg": 26,
            "wind_gust": 12.17,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "pop": 0.04
        }
    ],
    "daily": [
        {
            "dt": 1637380800,
            "sunrise": 1637363409,
            "sunset": 1637403258,
            "moonrise": 1637405640,
            "moonset": 1637365380,
            "moon_phase": 0.53,
            "temp": {
                "day": 24.28,
                "min": 21.08,
                "max": 27.05,
                "night": 23.28,
                "eve": 26.49,
                "morn": 21.08
            },
            "feels_like": {
                "day": 24.98,
                "night": 24.01,
                "eve": 26.49,
                "morn": 21.65
            },
            "pressure": 1009,
            "humidity": 85,
            "dew_point": 21.6,
            "wind_speed": 3.88,
            "wind_deg": 149,
            "wind_gust": 8.91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "clouds": 95,
            "pop": 0.3,
            "rain": 0.76,
            "uvi": 2.56
        },
        {
            "dt": 1637467200,
            "sunrise": 1637449847,
            "sunset": 1637489649,
            "moonrise": 1637494680,
            "moonset": 1637455020,
            "moon_phase": 0.56,
            "temp": {
                "day": 27,
                "min": 22.94,
                "max": 28.27,
                "night": 23.37,
                "eve": 26.67,
                "morn": 22.97
            },
            "feels_like": {
                "day": 28.77,
                "night": 23.98,
                "eve": 28.31,
                "morn": 23.72
            },
            "pressure": 1013,
            "humidity": 69,
            "dew_point": 20.88,
            "wind_speed": 5.07,
            "wind_deg": 153,
            "wind_gust": 7.21,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "clouds": 95,
            "pop": 0.81,
            "rain": 3.48,
            "uvi": 3.76
        },
        {
            "dt": 1637553600,
            "sunrise": 1637536286,
            "sunset": 1637576042,
            "moonrise": 1637583960,
            "moonset": 1637544540,
            "moon_phase": 0.59,
            "temp": {
                "day": 17.62,
                "min": 15.11,
                "max": 23.27,
                "night": 15.11,
                "eve": 16.37,
                "morn": 19.16
            },
            "feels_like": {
                "day": 17.13,
                "night": 14.27,
                "eve": 15.66,
                "morn": 19.04
            },
            "pressure": 1020,
            "humidity": 65,
            "dew_point": 11.09,
            "wind_speed": 8.68,
            "wind_deg": 32,
            "wind_gust": 14.83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "mưa nhẹ",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.66,
            "rain": 0.67,
            "uvi": 1.61
        },
        {
            "dt": 1637640000,
            "sunrise": 1637622725,
            "sunset": 1637662437,
            "moonrise": 1637673420,
            "moonset": 1637634060,
            "moon_phase": 0.62,
            "temp": {
                "day": 15.25,
                "min": 14.55,
                "max": 16.32,
                "night": 14.69,
                "eve": 15.76,
                "morn": 14.58
            },
            "feels_like": {
                "day": 14.27,
                "night": 13.7,
                "eve": 14.88,
                "morn": 13.66
            },
            "pressure": 1024,
            "humidity": 55,
            "dew_point": 6.42,
            "wind_speed": 5.93,
            "wind_deg": 30,
            "wind_gust": 10.74,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 3.27
        },
        {
            "dt": 1637726400,
            "sunrise": 1637709164,
            "sunset": 1637748833,
            "moonrise": 1637763000,
            "moonset": 1637723400,
            "moon_phase": 0.65,
            "temp": {
                "day": 15.83,
                "min": 14.16,
                "max": 17.09,
                "night": 15.94,
                "eve": 16.65,
                "morn": 14.32
            },
            "feels_like": {
                "day": 14.93,
                "night": 15.29,
                "eve": 16.02,
                "morn": 13.35
            },
            "pressure": 1024,
            "humidity": 56,
            "dew_point": 7.13,
            "wind_speed": 4.69,
            "wind_deg": 27,
            "wind_gust": 9.66,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "clouds": 99,
            "pop": 0,
            "uvi": 1.87
        },
        {
            "dt": 1637812800,
            "sunrise": 1637795603,
            "sunset": 1637835230,
            "moonrise": 1637852640,
            "moonset": 1637812560,
            "moon_phase": 0.68,
            "temp": {
                "day": 17.14,
                "min": 15.6,
                "max": 19.33,
                "night": 17.34,
                "eve": 18.87,
                "morn": 15.6
            },
            "feels_like": {
                "day": 16.63,
                "night": 16.98,
                "eve": 18.48,
                "morn": 15.02
            },
            "pressure": 1022,
            "humidity": 66,
            "dew_point": 10.72,
            "wind_speed": 4.1,
            "wind_deg": 11,
            "wind_gust": 6.01,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 2
        },
        {
            "dt": 1637899200,
            "sunrise": 1637882042,
            "sunset": 1637921628,
            "moonrise": 1637942400,
            "moonset": 1637901540,
            "moon_phase": 0.71,
            "temp": {
                "day": 19.09,
                "min": 17.11,
                "max": 23.31,
                "night": 18.43,
                "eve": 23.31,
                "morn": 17.11
            },
            "feels_like": {
                "day": 18.73,
                "night": 18.1,
                "eve": 22.92,
                "morn": 16.81
            },
            "pressure": 1021,
            "humidity": 64,
            "dew_point": 12.24,
            "wind_speed": 3.32,
            "wind_deg": 36,
            "wind_gust": 4.61,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 2
        },
        {
            "dt": 1637985600,
            "sunrise": 1637968481,
            "sunset": 1638008028,
            "moonrise": 1638032100,
            "moonset": 1637990280,
            "moon_phase": 0.75,
            "temp": {
                "day": 20.17,
                "min": 17.33,
                "max": 22.66,
                "night": 18.19,
                "eve": 22.66,
                "morn": 17.63
            },
            "feels_like": {
                "day": 19.84,
                "night": 17.79,
                "eve": 22.37,
                "morn": 17.3
            },
            "pressure": 1022,
            "humidity": 61,
            "dew_point": 12.56,
            "wind_speed": 3.04,
            "wind_deg": 52,
            "wind_gust": 7.45,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "mây đen u ám",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 2
        }
    ]
}`);

var air_pollution = JSON.parse(`{
    "coord": {
        "lon": 105.88,
        "lat": 21.12
    },
    "list": [
        {
            "main": {
                "aqi": 5
            },
            "components": {
                "co": 1522.06,
                "no": 4.86,
                "no2": 60.32,
                "o3": 2.5,
                "so2": 39.1,
                "pm2_5": 172.47,
                "pm10": 188.96,
                "nh3": 10.01
            },
            "dt": 1637373600
        }
    ]
}`);

function getLinkIcon(icon, bigger = true) {
    if (bigger)
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    else
        return `http://openweathermap.org/img/wn/${icon}.png`;
}

function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

function getHoursAndMinutes(timestamp) {
    let d = new Date(timestamp * 1000);
    let hours = leftFillNum(d.getHours(), 2);
    let minutes = leftFillNum(d.getMinutes(), 2);

    return `${hours}:${minutes}`;
}

function getDays(timestamp) {
    let d = new Date(timestamp * 1000);
    let currentDay = d.getDay();
    let day_name = '';

    switch (currentDay) {
        case 0:
            day_name = "CN";
            break;
        case 1:
            day_name = "Thứ 2";
            break;
        case 2:
            day_name = "Thứ 3";
            break;
        case 3:
            day_name = "Thứ 4";
            break;
        case 4:
            day_name = "Thứ 5";
            break;
        case 5:
            day_name = "Thứ 6";
            break;
        case 6:
            day_name = "Thứ 7";
    }
    return day_name;
}

function getColorByIndex(index){
    let color;
    if (index === 1) {
        color = 'green';
    } else if (index === 2) {
        color = 'yellow';
    } else if (index === 3) {
        color = 'orange';
    } else if (index === 4) {
        color = 'red';
    } else if (index === 5) {
        color = 'purple';
    } else {
        color = 'dark-purple'
    }
    return color;
}

function checkAQI(aqi, no2, pm10, o3, pm25) {
    let messageAQI;
    let indexNo2;
    let indexPm10;
    let indexO3;
    let indexPm25;

    // check aqi
    if (aqi === 1) {
        messageAQI = 'Tốt';
    } else if (aqi === 2)  {
        messageAQI = 'Trung bình';
    } else if (aqi === 3)  {
        messageAQI = 'Da nhạy cảm';
    } else if (aqi === 4)  {
        messageAQI = 'Không lành mạnh';
    } else {
        messageAQI = 'Rất không lành mạnh';
    }

    // check no2
    if (no2 <= 50) {
        indexNo2 = 1;
    } else if (no2 <= 100) {
        indexNo2 = 2
    } else if (no2 <= 200) {
        indexNo2 = 3
    } else if (no2 <= 400) {
        indexNo2 = 4
    } else {
        indexNo2 = 5
    }

    // check pm10
    if (pm10 <= 25) {
        indexPm10 = 1;
    } else if (pm10 <= 50) {
        indexPm10 = 2
    } else if (pm10 <= 90) {
        indexPm10 = 3
    } else if (pm10 <= 180) {
        indexPm10 = 4
    } else {
        indexPm10 = 5
    }

    // check o3
    if (o3 <= 60) {
        indexO3 = 1;
    } else if (o3 <= 120) {
        indexO3 = 2
    } else if (o3 <= 180) {
        indexO3 = 3
    } else if (o3 <= 240) {
        indexO3 = 4
    } else {
        indexO3 = 5
    }

    // check pm25
    if (pm25 <= 60) {
        indexPm25 = 1;
    } else if (pm25 <= 120) {
        indexPm25 = 2
    } else if (pm25 <= 180) {
        indexPm25 = 3
    } else if (pm25 <= 240) {
        indexPm25 = 4
    } else {
        indexPm25 = 5
    }

    return {
        'message': messageAQI,
        'no2': indexNo2,
        'pm10': indexPm10,
        'o3': indexO3,
        'pm25': indexPm25
    };
}

function render() {
    // Render current time
    let time = new Date(weather.current.dt * 1000);
    $('#timeUpdate').text(time.toTimeString());
    $('#currentTemp').text(weather.current.temp);
    $('#description').text(weather.current.weather[0].description);
    $('#pressure').text(weather.current.pressure);
    $('#humidity').text(weather.current.humidity);
    $('#windSpeed').text(weather.current.wind_speed * 3.6.toFixed());
    $('#currentIcon').attr('src', getLinkIcon(weather.current.weather[0].icon));

    // Render hourly
    let content = '';
    let maxDt = time.getTime() / 1000 + 3600 * 24;
    let i = 0;
    weather.hourly.forEach(function (element) {
        i++;
        if (element.dt > maxDt)
            return;
        content += `<li class="item ${i}">
                       <p class="hourly-time">${getHoursAndMinutes(element.dt)}</p>
                       <img class="hourly-icon" src="${getLinkIcon(element.weather[0].icon, false)}">
                       <p class="hourly-degree">${parseInt(element.temp)} °</p>
                    </li>`;
    });
    $('#bodyHourlyWeather').html(content);

    // Render weekly
    let dataPointTempMax = [];
    let dataPointTempMin = [];
    let contentDailyHtml = '';
    let checkFirst = true;
    weather.daily.forEach(function (element) {
        dataPointTempMax.push(element.temp.max.toFixed());
        dataPointTempMin.push(element.temp.min.toFixed());
        let iconHourlyDay = element.weather[0].icon;
        let iconHourlyNight = iconHourlyDay.replace('d', 'n');
        let date = new Date(element.dt * 1000);
        let classItem = "day-item";
        if (checkFirst) {
            classItem = "day-item current-day";
            checkFirst = false;
        }
        contentDailyHtml += `<li class="${classItem}">
                                <p class="day">${getDays(element.dt)}</p>
                                <p class="date">${date.getDate() + '/' + date.getMonth()}</p>
                                <p class="weather-daytime">
                                    <img class="hourly-icon" src="${getLinkIcon(iconHourlyDay)}" alt="">
                                </p>
                                 <p class="weather-night">
                                    <img class="hourly-icon" src="${getLinkIcon(iconHourlyNight)}" alt="">
                                </p>
                            </li>`;

    });
    $('#bodyDailyWeather').html(contentDailyHtml);
    drawWeatherChart(dataPointTempMax, dataPointTempMin);

    // Render AQI
    let aqi = air_pollution.list[0].main.aqi;
    let no2 = air_pollution.list[0].components.no2;
    let o3 = air_pollution.list[0].components.o3;
    let pm25 = air_pollution.list[0].components.pm2_5;
    let pm10 = air_pollution.list[0].components.pm10;
    let listCheckAQI = checkAQI(aqi, no2, pm10, o3, pm25);
    console.log(listCheckAQI);
    let contentAqiHTML = `<p><b>Chỉ số chất lượng không khí</b></p>
                          <div class="aqi ${getColorByIndex(aqi)}">
                                <div class="card-aqi ${getColorByIndex(aqi)}">
                                    <span class="index-aqi">${aqi}</span>
                                    <span class="status-aqi">${listCheckAQI.message}</span>
                                </div>
                          </div>
                          <div class="list-pollution">
                                <span>Chất gây ô nhiễm</span>
                                <div class="pollution-item">
                                    <p>PM2.5</p>
                                    <div class="progress pollution-bar">
                                        <div class="progress-bar ${getColorByIndex(listCheckAQI.pm25)}" role="progressbar" style="width: ${listCheckAQI.pm25*18 + pm25/110*10}%" ></div>
                                    </div>
                                    <span> ${pm25} µg/m³</span>
                                </div>
                                <div class="pollution-item">
                                    <p>PM10</p>
                                    <div class="progress pollution-bar">
                                        <div class="progress-bar ${getColorByIndex(listCheckAQI.pm10)}" role="progressbar" style="width: ${listCheckAQI.pm10*18 + pm10/180*10}%"></div>
                                    </div>
                                    <span> ${pm10} µg/m³</span>
                                </div>
                                <div class="pollution-item">
                                    <p>O3</p>
                                    <div class="progress pollution-bar">
                                        <div class="progress-bar ${getColorByIndex(listCheckAQI.o3)}" role="progressbar" style="width: ${listCheckAQI.o3*18 + o3/240*10}%"></div>
                                    </div>
                                    <span> ${o3} µg/m³</span>
                                </div>
                                <div class="pollution-item">
                                    <p>NO2</p>
                                    <div class="progress pollution-bar">
                                        <div class="progress-bar ${getColorByIndex(listCheckAQI.no2)}" role="progressbar" style="width: ${listCheckAQI.no2*18 + no2/400*10}%"></div>
                                    </div>
                                    <span> ${no2} µg/m³</span>
                                </div>
                            </div>`;

    $('#bodyAQIWeather').html(contentAqiHTML);
}
render();
