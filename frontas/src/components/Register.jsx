import Button from "react-bootstrap/Button";
import {
  RegisterBoxContainer,
  RegisterContainer,
} from "../styles/StyledRegister";

export const Register = () => {
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
            <form>
              <div style={{ display: "flex", flexDirection: "column"}}>
                <div style={{ marginTop: "10px", width: "100%", padding: "5px" }}>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                />
                <input
                  type="text"
                  placeholder="Your last name"
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                />
                <input
                  type="text"
                  placeholder="your@email.com"
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                />
                <input
                  type="password"
                  placeholder="***********"
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                />
                <Button
                  onClick={() => alert("you clicked REGISTER button")}
                  variant="warning"
                  style={{ marginTop: "10px", width: "100%", padding: "5px" }}
                >
                  REGISTER
                </Button>
                </div>
                
              </div>
            </form>
          </div>
        </RegisterBoxContainer>
      </RegisterContainer>
    </>
  );
};
