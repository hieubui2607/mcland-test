const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.key) {
    case "POST_UPDATE":
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};

export default postReducer;
