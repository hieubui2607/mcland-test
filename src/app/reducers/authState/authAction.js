import types from "./authTypes";

//! action
export const loadingUser = (payload) => ({ type: types.LOADING, payload });

export const loginAct = (payload) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload,
  });
};

export const checkTokenSuccess = (payload) => async (dispatch) => {
  dispatch({
    type: types.LOAD_USER_SUCCESS,
    payload,
  });
};

export const authFailed = () => async (dispatch) => {
  dispatch({
    type: types.LOAD_USER_FAILED,
  });
};

//logout
export const logout = () => ({
  type: types.LOGOUT,
});

//! event
// export const getUserWhenLogin = (body) => async (dispatch) => {
//   try {
//     dispatch(loadingUser({ isLoadingLogin: true }));
//   } catch (error) {
//     throw error;
//   }
// };
