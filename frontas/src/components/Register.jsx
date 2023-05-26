import Button from "react-bootstrap/Button";
import {
  RegisterBoxContainer,
  RegisterContainer,
} from "../styles/StyledRegister";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    console.log(formData, e);
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        navigate("/login"); 
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
    <>
      <RegisterContainer>
        <RegisterBoxContainer>
          <div>
            <div>
              <b>
                <div>Create your account here</div>
              </b>
            </div>
            <div>
              <p>
                Please enter your name, surname, email and password to register
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <form onSubmit={onHandleSubmit}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                    onChange={handleOnChange}
                  />
                  <input
                    name="surname"
                    type="text"
                    placeholder="Your last name"
                    style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                    onChange={handleOnChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                    onChange={handleOnChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="***********"
                    style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                    onChange={handleOnChange}
                  />
                  <Button
                    // onClick={() => alert("you clicked REGISTER button")}
                    variant="warning"
                    style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                    type="submit"
                  >
                    REGISTER
                  </Button>
                  <p style={{ marginTop: "10px" }}>
                    Already have an account? <Link to="/login">Login HERE</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </RegisterBoxContainer>
      </RegisterContainer>
    </>
  );
};
