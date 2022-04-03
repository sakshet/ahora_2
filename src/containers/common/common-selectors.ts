import { createStructuredSelector } from 'reselect';
import { createCommonSelector, createReferenceDataSelector } from '../../utils';

export const referenceDataSelector = createStructuredSelector({
  isLoggedIn: createReferenceDataSelector('isLoggedIn'),
  locations: createReferenceDataSelector('locations'),
  memberInfo: createReferenceDataSelector('memberInfo')
});

export const commonSelector = createStructuredSelector({
  referenceData: referenceDataSelector,
  referenceDataFetched: createCommonSelector('referenceDataFetched')
});