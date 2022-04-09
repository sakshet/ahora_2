import get from 'lodash-es/get';
export function createCommonSelector(property) {
    return (state) => {
        return state.common[property];
    };
}
export function createReferenceDataSelector(property) {
    return (state) => {
        const { referenceData } = state.common;
        return get(referenceData, property);
    };
}
//# sourceMappingURL=selector-utils.js.map