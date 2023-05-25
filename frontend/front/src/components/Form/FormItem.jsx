import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState } from "react";


function FormItem() {
    const [formParticipant, setFormParticipant] = useState({
      name: "",
      surname: "",
      email: "",
      phone: "",
    });


  const handleChange = (event) => {
    setFormParticipant({
        ...formParticipant, [event.target.name]: event.target.value,
    })

  }

 const handleOnSubmit = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:5000/home", formParticipant)
    .then((response) => console.log("succesful response", response))
    .catch((err) => console.log("err", err));
 }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Your name"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Last name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={handleChange}
            name="surname"
            type="text"
            placeholder="Your last name"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="your@email.com"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone number:
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="+370 x xxxxxx"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <div className="d-grid gap-2">
            <Button
              onClick={handleOnSubmit}
              variant="warning"
              type="submit"
            >
              + Add to list
            </Button>
          </div>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default FormItem;
