import { action } from 'typesafe-actions';
import { CountryList, StateList, Country } from './Register.d';

import ActionTypes from './constants';

export const fetchCountryList = () =>
    action(ActionTypes.COUNTRY_FETCH);

export const updateCountryList = (countryList: CountryList) =>
    action(ActionTypes.COUNTRY_FETCH_SUCCESS, { countryList });

export const countryListError = (error: any) =>
    action(ActionTypes.COUNTRY_FETCH_ERROR, error);

export const fetchStateList = (country: Country) =>
    action(ActionTypes.STATE_FETCH, { country });

export const updateStateList = (stateList: StateList) =>
    action(ActionTypes.STATE_FETCH_SUCCESS, { stateList });