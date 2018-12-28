@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div>
                        {{ $year }}/{{ $month }}/{{ $date }}   
                    </div>
                    <div>
                        打刻する
                    </div>
                </div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <div id="setSystemButton" />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
