import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function ParticipantListItem() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1111</td>
          <td>
            <Button
              onClick={() => alert("you clicked DELETE button")}
              variant="outline-primary"
            >
              DELETE
            </Button>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Bark</td>
          <td>Ltto</td>
          <td>@mda</td>
          <td>2222</td>
          <td>
            <Button
              onClick={() => alert("you clicked DELETE button")}
              variant="outline-primary"
            >
              DELETE
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ParticipantListItem;
