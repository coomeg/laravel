import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, OverlayTrigger,Popover, ButtonToolbar, FormControl,Form,FormGroup,ControlLabel, Glyphicon } from 'react-bootstrap';

class TimePicker extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var textStyle = {
            textAlign:"center"
          };
        var tdStyle = {
            align:"center"
          };
        var buttonStyle = {
            border:"none"
          };
        const popoverBottom = (
            <Popover id="popover-positioned-bottom">
                <table>
                Glyphicon
                    <tr>
                        <td><Button bsStyle="primary"  >+</Button></td>
                        <td><Button bsStyle="primary" >＋</Button></td>
                    </tr>
                    <tr>
                        <td><ControlLabel></ControlLabel></td>
                        <td><ControlLabel></ControlLabel></td>
                    </tr>
                    <tr>
                        <td><Button bsStyle="primary">－</Button></td>
                        <td><Button bsStyle="primary" >－</Button></td>
                    </tr>
                </table>
            </Popover>
        );

        return (
            <div>
                <FormGroup controlId="formInlineName">
                            <table>
                                <tr>
                                    <td>
                                        <ControlLabel>{this.props.lavel}</ControlLabel>{' '}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={tdStyle}>
                                        <Button bsSize="small" style={buttonStyle}>
                                            <Glyphicon glyph="menu-up" />
                                        </Button>
                                    </td>
                                    <td></td>
                                    <td style={tdStyle}>
                                    <Button bsSize="small" style={buttonStyle}>
                                        <Glyphicon glyph="menu-up" />
                                    </Button>
                                    </td>
                                </tr>
                                    <td style={tdStyle}>
                                        <OverlayTrigger trigger="click" placement="bottom" overlay={ popoverBottom } >
                                            <input type="text" size="3" maxlenght="2" style={textStyle} />
                                        </OverlayTrigger>
                                    </td>
                                    <td>：</td>
                                    <td style={tdStyle}>
                                        <OverlayTrigger trigger="click" placement="bottom" overlay={ popoverBottom } >
                                            <input type="text" size="3" maxlenght="2" style={textStyle} />
                                        </OverlayTrigger>
                                    </td>
                                <tr>
                                <td style={tdStyle}>
                                        <Button bsSize="small" style={buttonStyle}>
                                            <Glyphicon glyph="menu-down" />
                                        </Button>
                                    </td>
                                    <td></td>
                                    <td style={tdStyle}>
                                        <Button bsSize="small" style={buttonStyle}>
                                            <Glyphicon glyph="menu-down" />
                                        </Button>
                                    </td>
                                </tr>
                            </table>
                </FormGroup>{' '}
                <Button>現在日付</Button>
                    
            </div>
        );
    }
}
export default class ImputTime extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Form inline>
                    <div>
                        <TimePicker  lavel='開始時刻' placeholder='9：30'  />
                    </div>
                    <div>
                        <TimePicker  lavel='終了時刻' placeholder='18：30'  />
                    </div>
                    <div>
                        <TimePicker  lavel='休憩時刻' placeholder='1：0'  />
                    </div>
                    <div>
                        <Button bsStyle="danger">欠勤</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

if (document.getElementById('setSystemButton')) {
    ReactDOM.render(<ImputTime   />, document.getElementById('setSystemButton'));
}
