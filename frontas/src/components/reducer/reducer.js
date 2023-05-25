export const initialState = {
  total: 0,
  participants: [],
};

const participantReducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return {
        ...state,
        participants: action.payload,
      };

    case "updatedList":
      return {
        ...state,
        total: action.payload,
      };

    default:
      throw Error("Cannot match case in participantReducer");
  }
};

export default participantReducer;
