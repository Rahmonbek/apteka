const initialState = 1;
const conactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "id":
      return action.payload;
    default:
      return state;
  }
};

export default conactReducer;
