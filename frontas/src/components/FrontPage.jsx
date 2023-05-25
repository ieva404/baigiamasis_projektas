import Button from "react-bootstrap/Button";

export const FrontPage = () => {
  return (
    <>
      <h1>Welcome to your page</h1>
      <div>
      <div style={{padding:"5px 10px"}}>
        {" "}
        <Button
          onClick={() => alert("you clicked REGISTER button")} 
          className="btn btn-success"
        >
          REGISTER
        </Button>
      </div>

      <div style={{padding:"5px 10px"}}>
        {" "}
        <Button
          onClick={() => alert("you clicked LOGIN button")}
          className="btn btn-success"
        >
          LOGIN
        </Button>
      </div>
      </div>

    </>
  );
};
