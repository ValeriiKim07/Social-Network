import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

/*export type InitialStateType = {
  id: number | null;
  login: string | null;
  isAuth: boolean;
  isFetching: boolean;
  captchaUrl: string | null;
};*/

let initialState = {
  id: null as number | null,
  login: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataACPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataACType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataACPayloadType;
};

export const setAuthUserDataAC = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataACType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

type GetCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string,
): GetCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const setAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.setAuth();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserDataAC(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) =>
  async (dispatch: any) => {
    debugger;
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      //success get auth data
      dispatch(setAuthUserData());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message =
        response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserDataAC(null, null, null, false));
  }
};

export default authReducer;
