import { User } from "../../core/models/User";
import { actions } from "../actions/users.action";

const initialState: User[] = [];

export const usersReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case actions.setUser:
      return [...state, { name: payload }];
    case actions.clearUsers:
      return initialState;
    default:
      return state;
  }
};
