<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\UserTime;

class HomeController extends Controller
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
    public function index()
    {
        return view('home');
    }

    /**
     *
     * @return JSON
     */
    public function getInputDate($yearMonth)
    {
        $this->middleware('auth');

        $id = $id = Auth::id();
        $results = UserTime::getUserDateYmd($id, $yearMonth);
        $userData = array();
        
        foreach ($results as &$res) {
            $userData[]=array(
                'id'=>$res->id,
                'input_date'=>$res->input_date,
                'start_time'=>$res->start_time,
                'end_time'=>$res->end_time,
                'break_time'=>$res->break_time,
                'kintai_flg'=>$res->kintai_flg
                );
        }
        return response()->json($userData);
    }
}
