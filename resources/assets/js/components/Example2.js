import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>

                            <div className="panel-body">
                                I'm an example compone11nt!テスト
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const DAYOFTHEWEEK = [
    {dayoftheweekStr: '日'},
    {dayoftheweekStr: '月'},
    {dayoftheweekStr: '火'},
    {dayoftheweekStr: '水'},
    {dayoftheweekStr: '木'},
    {dayoftheweekStr: '金'},
    {dayoftheweekStr: '土'}
  ];

if (document.getElementById('example2')) {
    ReactDOM.render(<Example2 dayoftheweek={DAYOFTHEWEEK} dateObj={new Date()}  />, document.getElementById('example2'));
}
