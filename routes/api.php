<?php

use App\Http\Controllers\Api\WeatherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('weather', [WeatherController::class, 'Index'])->name('api.weather');;

Route::get('air_pollution', [WeatherController::class, 'AirPollution'])->name('api.air_pollution');;

Route::get('geocoding', [WeatherController::class, 'Geocoding'])->name('api.geocoding');
