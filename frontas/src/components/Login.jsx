import React from "react";
import Button from "react-bootstrap/Button";
import { LoginBoxContainer, LoginContainer } from "../styles/StyledLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/home");
        } else {
          // setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
          <form onSubmit={handleOnSubmit}>
            <div>
              <input
                name="email"
                onChange={handleOnChange}
                type="text"
                placeholder="youremail@mail.com"
                style={{ marginTop: "10px", width: "100%", padding: "5px" }}
              />
            </div>
            <div>
              <input
                name="password"
                onChange={handleOnChange}
                type="password"
                placeholder="***********"
                style={{ marginTop: "10px", width: "100%", padding: "5px" }}
              />
            </div>

            <Button
              type="submit"
              variant="warning"
              style={{ marginTop: "10px", width: "100%", padding: "5px" }}
            >
              <b>LOGIN</b>
            </Button>

            {/* {error && <Error>{error}</Error>} */}
          </form>
          <p>
            Don't have an account yet? <Link to="/register">Register HERE</Link>
          </p>
        </div>
      </LoginBoxContainer>
    </LoginContainer>
  );
};
