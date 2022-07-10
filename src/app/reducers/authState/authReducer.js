import types from "./authTypes";

const initialState = {
  loading: true,
  isAuth: false,
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.LOADING:
      return { ...state, ...action.payload };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload.accesssToken,
        user: action.payload.user,
      };
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload.accesssToken,
        user: action.payload.user,
      };
    case types.LOAD_USER_FAILED:
      return initialState;
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
