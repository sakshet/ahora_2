import { ICommonState } from "../containers/common";
import { IContentState } from "../containers/content-container";

export interface IApplicationState {
  content: IContentState;
  common: ICommonState;
}