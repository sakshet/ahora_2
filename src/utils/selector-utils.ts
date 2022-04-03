import get from 'lodash-es/get';
import { ICommonState, IMemberInfo, IReferenceData } from "../containers/common";
import { IApplicationState } from '../shared';

export function createCommonSelector<P extends keyof ICommonState>(property: P) {
  return (state: IApplicationState) => {
    return state.common[property];
  }
}

export function createReferenceDataSelector(property: keyof IReferenceData) {
  return (state: IApplicationState) => {
    const { referenceData } = state.common;
    return get(referenceData, property);
  };
}