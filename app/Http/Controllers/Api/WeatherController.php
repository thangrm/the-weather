<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lon' => 'required',
        ]);

        if ($validator->fails()) {
            $response = array('message' => 'Nothing to geocode', 'success' => false);
            return response()->json($response, 400);
        } else {
            $params = array(
                'lat' => $request->lat,
                'lon' => $request->lon,
                'exclude' => $request->exclude,
                'units' => 'metric',
                'lang' => 'vi',
                'appid' => env('OPEN_WEATHER_MAP_API_KEY'),
            );
            $endPoint = 'https://api.openweathermap.org/data/2.5/onecall';
            return response($this->callGetCURL($endPoint, $params));
        }
    }

    function AirPollution(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lat' => 'required',
            'lon' => 'required',
        ]);

        if ($validator->fails()) {
            $response = array('message' => 'Nothing to geocode', 'success' => false);
            return response()->json($response, 400);
        } else {
            $params = array(
                'lat' => $request->lat,
                'lon' => $request->lon,
                'appid' => env('OPEN_WEATHER_MAP_API_KEY'),
            );
            $endPoint = 'https://api.openweathermap.org/data/2.5/air_pollution';
            return response($this->callGetCURL($endPoint, $params));
        }
    }

    function Geocoding(Request $request)
    {
        $validator = Validator::make($request->all(), [
                'q' => 'required',
        ]);

        if ($validator->fails()) {
            $response = array('message' => 'Nothing city name', 'success' => false);
            return response()->json($response, 400);
        } else {
            $params = array(
                    'q' => $request->q,
                    'limit' => 3,
                    'appid' => env('OPEN_WEATHER_MAP_API_KEY'),
            );
            $endPoint = 'https://api.openweathermap.org/geo/1.0/direct';
            return response($this->callGetCURL($endPoint, $params));
        }
    }

    private function callGetCURL($endPoint, $params)
    {
        $url = $endPoint . '?' . http_build_query($params);
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }
}
