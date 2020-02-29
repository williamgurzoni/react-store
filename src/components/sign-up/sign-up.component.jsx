import React, { Component } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-in">
        <h2>I don't have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="Display Name"
            value={displayName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            label="E-mail"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            type="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton onClick={this.handleSubmit}>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
