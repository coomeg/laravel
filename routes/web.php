<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/inputTime/{year}/{month}/{date}', 'InputTimeController@index')
    ->name('inputTime')
    ->where(['year' => '[0-9]{4}',
             'month' => '[0-9]+$',
             'date' => '[0-9]+$',
    ]);
Route::get('/home/getInputDate/{yearMonth}', 'HomeController@getInputDate')
    ->name('getInputDate')
    ->where(['yearMonth' => '[0-9]+$'
    ]);