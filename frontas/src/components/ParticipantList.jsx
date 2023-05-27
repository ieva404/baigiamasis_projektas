import ParticipantListItem from "./ParticipantListItem";
import ListGroup from "react-bootstrap/ListGroup";
import { useState, useEffect } from "react";
import axios from "axios";

export const ParticipantList = () => {
  const [participats, setParticipants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/home")
      .then((response) => {
        setParticipants(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("err", err));
  }, []);

  console.log("participats", participats);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h5>Updated list</h5>

        <ListGroup>
          <ListGroup.Item
  
          >
            {" "}
            {participats.map((participant) => (
              <ParticipantListItem post={participant} />
            ))}

          </ListGroup.Item>
        </ListGroup>

      </div>
    </>
  );
};

