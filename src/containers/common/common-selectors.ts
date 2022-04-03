import { createStructuredSelector } from 'reselect';
import { createCommonSelector, createReferenceDataSelector } from '../../utils';


export const referenceDataSelector = createStructuredSelector({
  firstName: createReferenceDataSelector('firstName'),
  lastName: createReferenceDataSelector('lastName'),
  memberSince: createReferenceDataSelector('memberSince'),
  userId: createReferenceDataSelector('userId')
});

export const commonSelector = createStructuredSelector({
  referenceData: referenceDataSelector,
  referenceDataFetched: createCommonSelector('referenceDataFetched')
});