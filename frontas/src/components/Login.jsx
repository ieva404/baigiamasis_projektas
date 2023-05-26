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
          <p>Please enter email and password to login</p>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="youremail@mail.com"
                style={{ marginTop: "10px", width: "100%", padding: "5px"}}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="***********"
                style={{ marginTop: "10px", width: "100%", padding: "5px"}}
              />
            </div>

            <Button
              onClick={() => alert("you clicked LOGIN button")}
              variant="warning" style={{ marginTop: "10px", width: "100%", padding: "5px"}}
              
            ><b>LOGIN</b>
              
            </Button>
          </form>
        </div>
      </LoginBoxContainer>
    </LoginContainer>
  );
};
