import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.register || initialState;


const makeSelectCountryList = () =>
    createSelector(selectHome, substate => substate.countryList);

const makeSelectLoading = () =>
    createSelector(selectHome, substate => substate.loading);

const makeSelectError = () =>
    createSelector(selectHome, substate => substate.error);

const makeSelectStateList = () =>
    createSelector(selectHome, substate => substate.stateList);

export { selectHome, makeSelectCountryList, makeSelectLoading, makeSelectError, makeSelectStateList };

