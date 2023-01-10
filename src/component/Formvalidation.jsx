import React, { Component } from "react";
import "./formvalidation.scss";

export default class Formvalidation extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      errorEmail: "",
      errorPassword: "",
      errorConfirmPassword: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.email.includes("@")) {
        this.setState({
          errorEmail: "",
        });
      } else {
        this.setState({
          errorEmail: "invalid email id",
        });
      }
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        errorPassword: "password does not match",
      });
    } else {
      this.setState({
        errorPassword: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form className="formcontainer">
          <div className="cadentials">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <p id="error">{this.state.errorEmail}</p>
          </div>
          <div className="cadentials">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <p id="error">{this.state.errorPassword}</p>
          </div>
          <div className="cadentials">
            <label>Confirm Pasword</label>
            <input
              type="Password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <p id="error">{this.state.errorConfirmPassword}</p>
          </div>
          <button type="submit" onClick={this.onSubmitHandler}>
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
