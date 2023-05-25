// import { createContext, useReducer } from "react";
// import participantReducer, { initialState } from "./reducer";

// export const ListContect = createContext();

// export const ParticipantWrapper = ({ children }) => {
//     const [state, dispatch] = useReducer(participantReducer, initialState);

//     const deleteFromList = () => {
//         const uppdatedList = state.participants;
//         //updatedList.push(participant)

//         dispatch({
//             type: "delete",
//             payload: uppdatedList,
//         })

        // const updatedTotalList = () => {
        //     let total = 0;
        //     participants.forEatch((participants) => {
        //         total += participant.price
        //     })

        // }

    // }

//     return <StoreContex.Provider value={{total: state.total, participants: state.participants, deleteFromList}>{children}</StoreContex.Provider>
// );};