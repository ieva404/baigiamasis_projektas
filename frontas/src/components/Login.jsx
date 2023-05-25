import Button from "react-bootstrap/Button";
// import React from 'react';
import { LoginBoxContainer, LoginContainer } from "../styles/StyledLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginBoxContainer>
        <div>
          <div>
            <b>Login to your account</b>
          </div>
          <p>Please enter email and pasword to login</p>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="youremail@mail.com"
                style={{ margin: "5px", width: "200px", padding: "5px" }}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="***********"
                style={{ margin: "5px" }}
              />
            </div>

            <Button
              onClick={() => alert("you clicked LOGIN button")}
              className="btn btn-success"
            >
              LOGIN
            </Button>
          </form>
        </div>
      </LoginBoxContainer>
    </LoginContainer>
  );
};
