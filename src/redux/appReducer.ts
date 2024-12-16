import { setAuthUserData } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

export type InitialStateType = {
  initialized: boolean;
};
let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (
  state: InitialStateType = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

type InitializedSuccessType = {
  type: typeof SET_INITIALIZED;
};

export const setInitializedSuccess = (): InitializedSuccessType => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(setAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedSuccess());
  });
};

export default appReducer;
