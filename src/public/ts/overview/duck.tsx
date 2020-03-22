import { IPost } from "../post/Post";

export interface IState {
  data: IPost[];
}

export enum ActionType {
  SET_DATA = "SET_DATA",
  ADD_DATA = "ADD_DATA"
}

interface IAction {
  type: ActionType;
  payload: any;
}

export const initState: IState = {
  data: []
}

export const reducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case ActionType.SET_DATA:
      return Object.assign({}, state, { data: action.payload });

    case ActionType.ADD_DATA:
      return Object.assign({}, state, { data: state.data.concat(action.payload) });

    default:
      return state;
  }
}
