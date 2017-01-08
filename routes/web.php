<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('front/home');
});
Route::post('login', 'Auth\LoginController@login');
Route::get('/registration', function () {
    return view('front/registration');
});
Route::get('/connect/admin', function () {
    return view('admin/main');
})->middleware('auth');
