<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InputTimeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($year, $month, $date)
    {
       return view('inputTime', ['year' => $year, 'month' => $month, 'date' => $date]);
    }
}
