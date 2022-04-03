import { createContext } from 'react';
import { defaultState } from '../containers/common/common-reducers';

const RefDataContext = createContext({ referenceData: defaultState.referenceData });
export default RefDataContext;