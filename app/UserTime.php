<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserTime extends Model
{
    /**
     * ユーザーID、年月から打刻情報を取得する。
     * @param
     *      $id ユーザーID
     *      $yearMonth 年月(YYYYMM)
     */
    public static function getUserDateYmd($id, $yearMonth) {
        $year_month = substr($yearMonth,0, 4) . '-' . substr($yearMonth,4);
        $results = DB::select('select id, input_date, start_time, end_time, break_time, kintai_flg from user_times where id = ? and input_date between ? and ? order by input_date'
                            , [$id,UserTime::getFirstDate($year_month), UserTime::getLastDate($year_month)]);
        return $results;
    }

    /**
     * 年月から月初を取得する。
     */
    private static function getFirstDate($yearMonth) {
        return $firstDate = date('Y-m-d', strtotime('first day of ' . $yearMonth));
    }

    /**
     * 年月から月末を取得する。
     */
    private static function getLastDate($yearMonth) {
        return $lastDate = date('Y-m-d', strtotime('last day of ' . $yearMonth));
    }
}
