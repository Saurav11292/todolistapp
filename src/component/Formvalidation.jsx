import React, { Component } from "react";

export class Formvalidation extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        name: "email",
        value: "",
        error: "",
      },
      password: { name: "Password", value: "", error: "" },
      confirmPassword: { name: "Confirm-password", value: "", error: "" },
    };
  }

    render() {
        const { email, password, confirmPassword } = this.state;
    return (
      <div>
        <form className="formcontainer">
          <div className="email">
            <label>E-mail</label>
            <input type="text" name={email.name} />
          </div>
          <div className="password">
            <label>Passsword</label>
            <input type="text" name={password.name} />
          </div>
          <div className="confirmpasssword">
            <label>Confirm Passsword</label>
            <input type="text" name={confirmPassword.name} />
                </div>
                <div>
                    <button type="submit">Sign up</button>
                </div>
        </form>
      </div>
    );
  }
}

export default Formvalidation;
