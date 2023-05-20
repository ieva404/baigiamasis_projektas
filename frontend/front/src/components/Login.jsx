import Button from "react-bootstrap/Button"


export const Login = () => {
    return (
        <>
        <div>Login to oyour account</div>
        <form>
            <input type="text" placeholder="youremail@mail.com" />
            <input type="password" placeholder="***********" />
            <Button onClick={() => alert("you clicked LOGIN button")} className="btn btn-success">LOGIN</Button>
        </form>
        </>
        
    )
}