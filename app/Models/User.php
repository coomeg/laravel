<?php
namespace App\Models;

class User extends Model
{
    /**
     * ユーザテーブル
     */
    public function getUserInfo($id) {
        $users = DB::table('users')->where('id', $id)->get();
        return $users;
    }

}