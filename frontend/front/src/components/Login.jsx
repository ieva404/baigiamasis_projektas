import Button from "react-bootstrap/Button";
// import React from 'react';
import {LoginContainer} from "../styles/StyledLogin"

export const Login = () => {
  return (
    <LoginContainer>
      <div>
        <div><b>Login to your account</b></div>
        <p>Please enter email and pasword to login</p>
      </div>

      <form>
        <input type="text" placeholder="youremail@mail.com" />
        <input type="password" placeholder="***********" />
        <Button
          onClick={() => alert("you clicked LOGIN button")}
          className="btn btn-success"
        >
          LOGIN
        </Button>
      </form>
    </LoginContainer>
  );
};
