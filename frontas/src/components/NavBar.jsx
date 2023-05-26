import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

// import logo from "../../assets"

function NavBar({ isLoading, onLogout }) {
  const { isSignedIn } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  if (isLoading) {
    return;
  }

  return (
    <div style={{ width: "100%" }}>
      <Navbar>
        {" "}
        {isSignedIn ? (
          <Container>
            <Navbar.Brand href="">
              LOGO
              {/* <img
            style={{ color: "red" }}
            src="https://img.freepik.com/vetores-premium/conceito-de-modelo-de-design-de-logotipo-do-planeta_644408-2126.jpg?w=826"
            alt="image"
          /> */}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span>
                  Signed in as: <a href="/home">Mark Otto</a>
                </span>
                <span>
                  {
                    <Button
                      onClick={onLogout}
                      // onClick={() => navigate("/")}
                      variant="dark"
                      size="sm"
                      style={{ margin: "10px" }}
                    >
                      LOGOUT
                    </Button>
                  }
                </span>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {/* {isSignedIn && <button onClick={() => navigate("/")}>LOGOUT</button>} */}
      </Navbar>
    </div>
  );
}

export default NavBar;
