import Button from "react-bootstrap/Button";

export const Register = () => {
  return (
    <>
      <div>Create your account here</div>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your last name" />
        <input type="text" placeholder="your@email.com" />
        <input type="password" placeholder="***********" />
        <Button
          onClick={() => alert("you clicked REGISTER button")}
          className="btn btn-success"
        >
          REGISTER
        </Button>
      </form>
    </>
  );
};
