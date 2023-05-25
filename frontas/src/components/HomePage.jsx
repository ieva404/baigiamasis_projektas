import ParticipantListItem from "./Form/FormItem";
import NavBar from "./NavBar";
import { ParticipantList} from "./ParticipantList"
import { Button} from "react-bootstrap"


// Homepage where you can see FORM and LIST

export const Homepage = () => {
  return (
    <>
    <NavBar/>
      <h2>Add a new participant to the list</h2>
      <ParticipantListItem/>

      <h2>List of participants</h2>
      <ParticipantList />
    </>
  );
};
