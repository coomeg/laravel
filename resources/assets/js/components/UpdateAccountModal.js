import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button, FormControl,Form,FormGroup,ControlLabel,Modal  } from 'react-bootstrap';
import styles from "./style/updateAccountModal.module.css";

export default class UpdateAccountModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.state = {
      show: false,
      value: ''
    };
  }

  componentWillMount() {
		const request = axios.create({
      baseURL: '/user/getUser'
    });
    request.get()
      .then(res => {
        this.setState({ 
          value: res.data.name
        });
      });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleUpdate(e) {
    const data = { name : this.state.value};
    // axios.post('/user/updateUser', data).then(response => {
    // });

    axios.post('/user/updateUser',data)
      .then((response) => {
        console.log(response)
      }).catch((response) => {
        console.log(response)
      });
    
    var userName = document.getElementById('userName');
    userName.innerHTML = this.state.value;
    this.handleClose();
  }

  render() {

    return (
      <div>
        <a onClick={this.handleShow} className='updateAccountModal'>
          アカウント編集
        </a>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>アカウント編集</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>ニックネーム</h4>
            <form>
              <FormGroup
                controlId="formBasicText">
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleUpdate}>変更</Button>
            <Button onClick={this.handleClose}>閉じる</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

if (document.getElementById('updateAccountModal')) {
  ReactDOM.render(<UpdateAccountModal />, 
  document.getElementById('updateAccountModal'));
}