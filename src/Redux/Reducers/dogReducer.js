const INITIAL_STATE = {
  url: "",
  breeds: ""
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_DOG_DATA":
      return {
        ...state,
        ...action.content
      };
    default:
      return state;
  }
};
