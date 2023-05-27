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

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span>
                  Signed in as: <a href="/home">Admin</a>
                </span>
                <span>
                  {
                    <Button
                      // onClick={onLogout}
                      onClick={() => navigate("/")}
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
          <Container>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <span>
                  Signed in as: <a href="/home">Admin</a>
                </span>
                <span>
                  {
                    <Button
                      // onClick={onLogout}
                      onClick={() => navigate("/")}
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
        )}
        {/* {isSignedIn && <button onClick={() => navigate("/")}>LOGOUT</button>} */}
      </Navbar>
    </div>
  );
}

export default NavBar;
