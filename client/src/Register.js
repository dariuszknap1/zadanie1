import React from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const axios = require('axios');

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  validate = (data) => {
    const schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
      password: Joi.required().label("Password"),
    })
    return schema.validate(data)
  }

  register = () => {
    let data = { email: this.state.username, password: this.state.password }
    const { error, value } = this.validate(data)
    if (error) {
      swal({ text: error.message, icon: "error", type: "error" });
      return
    }

    if (this.state.password != this.state.confirm_password) {
      swal({ text: "'Password' and 'Confirm Password' must be the same", icon: "error", type: "error" });
      return
    }
    axios.post('http://localhost:2000/register', {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      swal({ text: res.data.title, icon: "success", type: "success" });
      this.props.history.push('/');
    }).catch((err) => {
      swal({ text: err.response.data.errorMessage, icon: "error", type: "error" });
    });
  }

  render() {
    return (
      <div style={{ marginTop: '200px' }}>
        <div>
          <h2>Register</h2>
        </div>

        <div>
          <TextField id="standard-basic" type="text" autoComplete="off" name="username" value={this.state.username} onChange={this.onChange} placeholder="User Name" required />
          <br /><br />
          <TextField id="standard-basic" type="password" autoComplete="off" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required />
          <br /><br />
          <TextField id="standard-basic" type="password" autoComplete="off" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange} placeholder="Confirm Password" required />
          <br /><br />
          <Button className="button_style" variant="contained" color="primary" size="small" disabled={this.state.username == '' && this.state.password == ''} onClick={this.register} >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/">
            Login
          </Link>
        </div>
      </div>
    );
  }
}
