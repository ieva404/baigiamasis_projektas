import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormItem() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Your name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Last name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Your last name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="your@email.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone number:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="+370 x xxxxxx" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <div className="d-grid gap-2">
            <Button
              onClick={() => alert("you clicked +ADD button")}
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
