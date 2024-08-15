import authReducer, { setAuthUserDataAC } from "./authReducer";

let state = {
  id: null,
  login: null,
  isAuth: false,
};

it("state auth should be true", () => {
  let action = setAuthUserDataAC(12, "test", "test@gmail.com", true);

  let newState = authReducer(state, action);

  expect(newState.isAuth).toBe(true);
});
