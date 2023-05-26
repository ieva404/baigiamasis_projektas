import ParticipantListItem from "./Form/FormItem";
import NavBar from "./NavBar";
import { ParticipantList } from "./ParticipantList";

import {
  HomeInnerBoxContainer,
  HomeBoxContainer,
  HomeContainer,
} from "../styles/StyledHomePage";

// Homepage where you can see FORM and LIST

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <HomeContainer>
        <HomeBoxContainer>
          <div>
            <h2 style={{ paddingBottom: "20px" }}>
              Add a new participant to the list
            </h2>
          </div>
          <div>
            <ParticipantListItem />
          </div>
        </HomeBoxContainer>
      </HomeContainer>

      <HomeContainer>
        <HomeInnerBoxContainer>
          <div style={{ color: "grey", paddingBottom: "50px" }}>
            <h2>List of participants</h2>
            <ParticipantList />
          </div>
        </HomeInnerBoxContainer>
      </HomeContainer>
    </>
  );
};
