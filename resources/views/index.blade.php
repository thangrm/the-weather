<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thời tiết</title>
    <link rel="icon" href="{{ asset('asset/image/icon.png') }}" type="image/icon type">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('asset/css/style.css') }}">
</head>

<body>
    <header>
        <div class="container">
            <div class="logo">
                <img src="{{ asset('asset/image/logo.svg') }}" class="filter-white" alt="Logo">
                <p>Thời tiết</p>
            </div>

            <div class="location">
                <img src="{{ asset('asset/image/pin.png') }}" alt="Pin">
                <p class="txt-current-location">Hà Nội</p>
                <input type="text" class="search-location" placeholder="Tìm thành phố" name="" id="">
            </div>
        </div>
    </header>
    <div class="clearfix"></div>
    <hr class="seperater">
    <main>
        <div class="container">
            <div class="current-weather">
                <div class="info">
                    <p class="info-location">Thời tiết Thường Tín, Hà Nội</p>
                    <p class="info-time-update">Cập nhật: <span id="timeUpdate">hh:mm:ss</span></p>
                    <p class="info-temperature"><span id="currentTemp"></span>°</p>
                    <p class="info-description"><span id="description"></span></p>
                    <div class="detail">
                        <div class="detail-item">
                            <img src="{{ asset('asset/image/windy.svg') }}" class="filter-white" alt="Gió">
                            <p>Gió: <span id="windSpeed"></span> km/h</p>
                        </div>
                        <div class="detail-item">
                            <img src="{{ asset('asset/image/humidity.svg') }}" class="filter-white" alt="Độ ẩm">
                            <p>Độ ẩm: <span id="humidity"></span>%</p>
                        </div>
                        <div class="detail-item">
                            <img src="{{ asset('asset/image/pressure.svg') }}" class="filter-white" alt="Áp suất">
                            <p>Áp suất: <span id="pressure"></span>hPa</p>
                        </div>
                    </div>
                </div>

                <div class="current-icon">
                    <img id="currentIcon" src="" class="filter-white">
                </div>
            </div>
            <div class="card-weather hourly">
                <span>Dự báo theo giờ</span>
                <div class="hourly-weather-card" id="hourlyWeatherCard">
                    <ol class="list-hourly-weather" id="bodyHourlyWeather">
                        <li class="item">
                            <p class="hourly-time">16:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">17:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">18:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">19:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">20:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">21:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">22:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">23:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">24:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">00:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">01:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">02:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">03:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">04:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">05:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">06:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">07:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">08:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">09:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">10:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">11:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">12:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">13:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">14:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                        <li class="item">
                            <p class="hourly-time">14:00</p>
                            <img class="hourly-icon" src="{{ asset('asset/image/logo.svg') }}" alt="">
                            <p class="hourly-degree">28 °</p>
                        </li>
                    </ol>
                </div>
                <a class="prev" id="prevHourly">&#8249;</a>
                <a class="next" id="nextHourly">&#8250;</a>
            </div>
            <div class="card-weather daily">
                <span><b>Dự báo theo ngày</b></span>
                <ol class="list-weather-day" id="bodyDailyWeather">
                    <!-- List weather daily-->
                </ol>
                <div class="chart-box">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
            <div class="card-weather air-quality" id="bodyAQIWeather">

            </div>
        </div>
    </main>
    <footer>
        <div class="container">

        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
    <script src="{{ asset('asset/js/script.js') }}"></script>
</body>

</html>
