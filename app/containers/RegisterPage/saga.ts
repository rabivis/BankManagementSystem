/**
 * Gets the list country and state using public API call 
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { updateCountryList, countryListError, updateStateList } from './actions';
import ActionTypes from './constants';

import request from 'utils/request';
import { constants } from 'crypto';

/**
 * Backend API call for get country list handler
 */
export function* getCountryList(action) {
  const requestURL = `http://localhost:4000/pub/get_countries`;
  try {
    // Call our request helper (see 'utils/request')
    const countryList = yield call(request, requestURL);
    yield put(updateCountryList({countryList:countryList.data}));
  } catch (err) {
    yield put(countryListError(err));
  }
}


export function* getStateList(action) {
  // Select username from store
  const { country } = action.payload;
  const requestURL = `http://localhost:4000/pub/get_states/${country}`;
  
  try {
    // Call our request helper (see 'utils/request')
    const stateList = yield call(request, requestURL);
    yield put(updateStateList({stateList:stateList.data}));
  } catch (err) {
    yield put(countryListError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* connectToBackend() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.COUNTRY_FETCH, getCountryList);
  yield takeLatest(ActionTypes.STATE_FETCH, getStateList);
}
