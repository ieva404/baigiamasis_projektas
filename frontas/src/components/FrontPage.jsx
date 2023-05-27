import Button from "react-bootstrap/Button";
import { FrontBoxContainer, FrontContainer } from "../styles/StyledFrontPage";
import { Link, useNavigate } from "react-router-dom";

export const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <FrontContainer>
        <FrontBoxContainer>
          <h1>Welcome to your page</h1>
          <div>
            <div style={{ padding: "5px 10px" }}>
              {" "}
              <Button
                onClick={() => navigate("/register")}
                variant="secondary"
                style={{ width: "100%" }}
              >
                REGISTER
              </Button>
            </div>

            <div style={{ padding: "5px 10px" }}>
              {" "}
              <Button
                onClick={() => navigate("/login")}
                variant="warning"
                style={{ width: "100%" }}
              >
                <b>LOGIN</b>
              </Button>
            </div>
          </div>
        </FrontBoxContainer>
      </FrontContainer>
    </>
  );
};
