import { Reducer } from 'redux';
import { ActionType, IContentAction } from './content-actions';

export const defaultState: IContentState = {
  isFetching: false,
  message: ''
};

export interface IContentState {
  isFetching: boolean;
  message: string;
};

export const contentReducer: Reducer<IContentState, IContentAction> = (
  state: IContentState = defaultState, action: IContentAction
): IContentState => {
  switch (action.type) {
    case ActionType.REQ_GET_MESSAGE:
      return {
        ...state,
        isFetching: false
      };
    case ActionType.RECV_GET_MESSAGE:
      return {
        ...state,
        isFetching: true,
        message: action.message
      };
  }
  return state;
}