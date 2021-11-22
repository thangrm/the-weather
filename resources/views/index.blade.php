<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
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
            <p class="txt-current-location" id="txtCurrentLocation">Thường tín, VN</p>
            <div class="wrap-search">
                <input type="text" class="search-location" placeholder="Tìm thành phố" name="" id="btnSearch">
                <div class="search-suggestions" id="searchSuggestion">
                    <ul id="bodySearchSuggestion">

                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="clearfix"></div>
<hr class="seperater">
<main>
    <div class="container">
        <div class="current-weather">
            <div class="info">
                <p class="info-location">Thời tiết <span id="infoLocation"></span></p>
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
                    <!-- List weather hourly-->
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
            <p><b>Chỉ số chất lượng không khí</b></p>
            <div class="aqi green">
                <div class="green">
                    <span class="index-aqi">5</span>
                    <span class="status-aqi">Tốt</span>
                </div>
            </div>
            <div class="list-pollution">
                <span>Chất gây ô nhiễm</span>
                <div class="pollution-item">
                    <p>PM2.5</p>
                    <div class="progress pollution-bar">
                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span> 20 µg/m³</span>
                </div>
                <div class="pollution-item">
                    <p>PM10</p>
                    <div class="progress pollution-bar">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span> 20 µg/m³</span>
                </div>
                <div class="pollution-item">
                    <p>O3</p>
                    <div class="progress pollution-bar">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span> 20 µg/m³</span>
                </div>
                <div class="pollution-item">
                    <p>NO2</p>
                    <div class="progress pollution-bar">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span> 20 µg/m³</span>
                </div>
            </div>
        </div>
    </div>
</main>
<footer>
    <div class="container">
        <div class="footer-content">
            <p class="footer-copyright"> &copy; 2021 Copyright: {{config('app.name')}}</p>
            <div class="footer-section">
                <a href="#">Về chúng tôi</a> |
                <a href="#">Điều khoản sử dụng</a> |
                <a href="#">Chính sách bảo mật</a> |
                <a href="#">Hỗ trợ</a>
            </div>
        </div>
    </div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>
<script src="{{ asset('asset/js/script.js') }}"></script>
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    function getLocation(lat,lon,nameLocation){
        $('#searchSuggestion').hide();
        $('#txtCurrentLocation').text(nameLocation);
        $('#infoLocation').text(nameLocation);

        $.ajax({
            type: 'GET',
            url: '{{ route('api.weather') }}',
            data: {lat: lat, lon: lon,  exclude: 'minutely'},
            success: function(response){
                let weather = JSON.parse(response);
                renderWeather(weather);
            }
        });

        $.ajax({
            type: 'GET',
            url: '{{ route('api.air_pollution') }}',
            data: {lat: lat, lon: lon,  exclude: 'minutely'},
            success: function(response){
                let air_pollution = JSON.parse(response);
                renderAQI(air_pollution);
            }
        });
    }

    $('#btnSearch').on('change',function (){
        $('#bodySearchSuggestion').html('');
        $('#searchSuggestion').show();
        let nameCity = $('#btnSearch').val();
        $.ajax({
            type: 'GET',
            url: '{{ route('api.geocoding') }}',
            data: {q: nameCity},
            success: function(response){
                response = JSON.parse(response);
                let htmlSearch = '';
                if(Array.isArray(response)){
                    response.forEach(function (e){
                        let nameLocation = e.name + ', ' + e.country;
                        if(e.hasOwnProperty('local_names')){
                            if(e.local_names.hasOwnProperty('vi')){
                                nameLocation = e.local_names.vi + ', ' + e.country;
                            }
                        }
                        htmlSearch += `<li onclick="getLocation(${e.lat},${e.lon},'${nameLocation}')">${nameLocation}</li>`;
                    });
                }
                if(htmlSearch === ''){
                    htmlSearch = `<p style="text-align: center; padding-top: 10px;">Không tìm thấy kết quả.</p>`;
                }
                $('#bodySearchSuggestion').html(htmlSearch);
            }
        });
    });


</script>
</body>

</html>
