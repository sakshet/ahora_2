export enum ActionType {
  REQ_GET_MESSAGE = 'REQ_GET_MESSAGE',
  RECV_GET_MESSAGE = 'RECV_GET_MESSAGE'
}

export interface getMessageAction {
  type: ActionType.REQ_GET_MESSAGE;
}

export interface getMessageSuccessAction {
  message;
  type: ActionType.RECV_GET_MESSAGE;
}

export const getWelcomeMessage = (): getMessageAction => ({
  type: ActionType.REQ_GET_MESSAGE
});

export const getWelcomeMessageSuccess = (message: string): getMessageSuccessAction => ({
  message,
  type: ActionType.RECV_GET_MESSAGE
});

export type IContentAction =
  | getMessageAction
  | getMessageSuccessAction;