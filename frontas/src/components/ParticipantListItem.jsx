import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React from "react";

function ParticipantListItem({ post }) {
  const { id, name, surname, email, phone } = post;

  const handleDelete = (e) => {
    // e.preventDefault();
    // const id = participant.id;
    axios
      .delete(`http://localhost:5000/home/${id}`)
      .then((response) => {
        // alert("Are you sure want to delete this item?", response);
        window.location.reload();
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
              <Button onClick={handleDelete} variant="outline-primary">
                DELETE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ParticipantListItem;
