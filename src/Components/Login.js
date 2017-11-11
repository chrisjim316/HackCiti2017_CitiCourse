import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../CSS/Login.css'
import {Switch, HashRouter, Route, Link} from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
      <br /><br /> <br /> <br /> <br /><br />
      <br /> <br /> <br /> <br /> <br /> <br />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email </ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <br /><br />
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password </ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Link to="/reactCourse" style={{textDecoration: 'none'}}>
          <br />
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Login;
