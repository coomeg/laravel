<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_times', function (Blueprint $table) {
            $table->integer('id');
            $table->date('input_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->time('break_time');
            $table->boolean('kintai_flg');
            $table->boolean('delete_flg');
            $table->timestamps();

            $table->primary('id', 'input_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_times');
    }
}
