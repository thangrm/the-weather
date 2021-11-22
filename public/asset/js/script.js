var nextHourly = document.getElementById("nextHourly");
var prevHourly = document.getElementById("prevHourly");
var cardWeather = document.getElementById("hourlyWeatherCard");
var NEXT = "NEXT";
var PREV = "PREV";
var myChart;

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

    let step;
    let limitMargin;
    console.log(window.innerWidth);
    if (window.innerWidth >= 1400) {
        step = 1150;
        limitMargin = -1600;
    } else {
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
    if(myChart != null){
        myChart.destroy();
    }
    Chart.register(ChartDataLabels);
    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

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

function renderWeather(weather) {
    // Render current time
    let time = new Date(weather.current.dt * 1000);
    $('#timeUpdate').text(time.toTimeString());
    $('#currentTemp').text(weather.current.temp.toFixed());
    $('#description').text(weather.current.weather[0].description);
    $('#pressure').text(weather.current.pressure);
    $('#humidity').text(weather.current.humidity);
    $('#windSpeed').text(weather.current.wind_speed * 3.6.toFixed());
    $('#currentIcon').attr('src', getLinkIcon(weather.current.weather[0].icon));

    // Render hourly
    let content = '';
    let maxDt = time.getTime() / 1000 + 3600 * 24;
    weather.hourly.forEach(function (element) {
        if (element.dt > maxDt)
            return;
        content += `<li class="item">
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
}

function renderAQI(air_pollution){
    // Render AQI
    let aqi = air_pollution.list[0].main.aqi;
    let no2 = air_pollution.list[0].components.no2;
    let o3 = air_pollution.list[0].components.o3;
    let pm25 = air_pollution.list[0].components.pm2_5;
    let pm10 = air_pollution.list[0].components.pm10;
    let listCheckAQI = checkAQI(aqi, no2, pm10, o3, pm25);
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