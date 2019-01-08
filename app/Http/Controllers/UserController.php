<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Requests;

class UserController extends Controller
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

    public function index()
    {
        return view('home');
    }

    public function getUser()
    {
        $id = Auth::id();
        $user = User::find($id);
        return $user;
    }

    public function updateUser(Request $request)
    {
        $id = Auth::id();
        $user = User::find($id);
        $array = $request->all();
        $user->name = $array['name'];
        $user->save();
        return '';
    }
}