import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DayRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const year = this.props.year;
    const month = this.props.month;
    const inputTimes = this.props.inputTimes;

    var rows = [];
    const data = [];
    var lastDay = new Date(year, month + 1, 0);
    // [0]日曜～[6]月曜
    var day = new Date(year, month, 1).getDay();
    const maxRow = 42;
    var dateCnt = 1;
    
    for (let i = 0; i <= maxRow; i++) {
      if (i <= day) {
        // 1日が始まる前の曜日は空白
        rows.push(
          <td>
          </td>
        );
      } else {
        if (dateCnt > lastDay.getDate()) {
          rows.push(
            <td>
            </td>
          );
        } else {
          var url = 'inputTime/'+year+'/'+month+'/'+dateCnt;
          var matchData = inputTimes.filter(function(item, index){
            var inputDate = new Date(item.input_date) ;
            var calDate = new Date(year+"-"+(month+1)+"-"+dateCnt);
            if (inputDate.getFullYear() + inputDate.getMonth() + inputDate.getDate() 
                == calDate.getFullYear()+ calDate.getMonth() + calDate.getDate()) return true;
          });
         
          rows.push(
            <td>
              <a href={url}>
                {dateCnt}
              </a>
              {matchData.length > 0 ? <div><div>{matchData[0].start_time}</div><div>{matchData[0].end_time}</div></div> : null}
            </td>
          );
          dateCnt++;
        }
      }

      if (i%7 === 0) {
        // 7日 = 1行
        data.push(
          <tr>
            {rows}
          </tr>
        );
        // 初期化
        rows = [];
      }
    }
    return (
      <table>
        {data}
      </table>
    );
  }
}

class DayOfTheWeekRow extends Component {
  render() {
    const rows = [];

    this.props.dayoftheweek.forEach((dayStr) => {
      rows.push(
        <td>
          {dayStr.dayoftheweekStr}
        </td>
      );
    });

    return (
      <table class="table table-bordered">
        <th>
          {rows}
        </th>
      </table>
    );
  }
}

class DayTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DayOfTheWeekRow dayoftheweek={this.props.dayoftheweek} />
        <DayRow year={this.props.year} month={this.props.month} inputTimes={this.props.inputTimes} />
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const year = this.props.year;
    const month = this.props.month;

    return (
      <form>
        <table>
          <tr>
            <td><input type="button" value="<" onClick={this.props.action.bind(this, -1)} />
            </td>
            <td>{year} / {month + 1}</td>
            <td><input type="button" value=">" onClick={this.props.action.bind(this, 1)} /></td>
          </tr>
        </table>
      </form>
    );
  }
}

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    var dateObj = new Date();

    this.state = {
      year: dateObj.getFullYear(),
      month: dateObj.getMonth(),
      inputTimes: []
    };
    this.updateDate = this.updateDate.bind(this);
  }

  updateDate(value) {
    var currDate = new Date(this.state.year, this.state.month, 1);
    currDate.setMonth(currDate.getMonth() + value);

    const request = axios.create({
      baseURL: '/home/getInputDate'
    })
    request.get('/' + currDate.getFullYear() + (currDate.getMonth()+1))
      .then(res => {
        this.setState({ 
          year: currDate.getFullYear(),
          month: currDate.getMonth(),
          inputTimes: res.data
        });
      })
  }

  componentWillMount() {
    const request = axios.create({
      baseURL: '/home/getInputDate'
    })
    request.get('/' + this.state.year + (this.state.month+1))
      .then(res => {
        this.setState({ 
          inputTimes: res.data
        });
      })
  }
 
  render() {
    return (
      <div>
        <Header year={this.state.year} month={this.state.month} action={this.updateDate} />
        <DayTable year={this.state.year} month={this.state.month} dayoftheweek={this.props.dayoftheweek} inputTimes={this.state.inputTimes} />
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

if (document.getElementById('calendarTable')) {
  ReactDOM.render(<CalendarTable dayoftheweek={DAYOFTHEWEEK} />, 
  document.getElementById('calendarTable'));
}