import Button from "react-bootstrap/Button";
import { FrontBoxContainer, FrontContainer } from "../styles/StyledFrontPage";

export const FrontPage = () => {
  return (
    <>
      <FrontContainer>
        <FrontBoxContainer>
          <h1>Welcome to your page</h1>
          <div>
            <div style={{ padding: "5px 10px" }}>
              {" "}
              <Button
                onClick={() => alert("you clicked REGISTER button")}
                variant="secondary"
                style={{ width: "100%" }}
              >
                REGISTER
              </Button>
            </div>

            <div style={{ padding: "5px 10px" }}>
              {" "}
              <Button
                onClick={() => alert("you clicked LOGIN button")}
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
