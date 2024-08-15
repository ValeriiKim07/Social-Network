import { setAuthUserData } from "./authReducer";
import appReducer, { setInitializedSuccess } from "./appReducer";

let state = {
  initialized: false,
};

it("app should change initial state", () => {
  let action = setInitializedSuccess();

  let newState = appReducer(state, action);

  expect(newState.initialized).toBe(true);
});
