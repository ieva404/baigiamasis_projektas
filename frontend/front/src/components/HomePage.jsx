import HorizontalExample from "./Form/FormItem";
import TextLinkExample from "./NavBar";
import { ParticipantList} from "./ParticipantList"

export const Homepage = () => {
  return (
    <>
    <TextLinkExample/>
      <h2>Add a new participant to the list</h2>
      <HorizontalExample/>
      <ParticipantList />
    </>
  );
};
