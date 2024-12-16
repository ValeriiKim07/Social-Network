type FriendsType = {
  id: number;
  name: string;
};

let initialState = {
  friends: [
    { id: 1, name: "Valerii" },
    { id: 2, name: "Anastasiia" },
    { id: 3, name: "Jessica" },
  ] as FriendsType[],
};

export type InitialStateType = typeof initialState;

const sidebarReducer = (
  state = initialState,
  /*action: any,*/
): InitialStateType => {
  return state;
};

export default sidebarReducer;
