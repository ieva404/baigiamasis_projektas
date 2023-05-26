import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../../assets"

function NavBar() {
  return (
    <div style={{width: "100%"}}>
      <Navbar >
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
              Signed in as: <a href="/login">Mark Otto</a>
            </span>
            <span>
              <Button
                onClick={() => alert("you clicked LOGOUT button")}
                variant="dark"
                size="sm"
                style={{margin: "10px"}}
              >
                LOGOUT
              </Button>
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default NavBar;
