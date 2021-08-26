import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export default class Login extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="102925277006-0sggvbg6l6s14qjkjfedfm8vdh9ap1g7.apps.googleusercontent.com"
          buttonText="Login"
          onResponse={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
