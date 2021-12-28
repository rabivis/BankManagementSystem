import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  countryList: undefined,
  stateList: undefined,
  country: undefined,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function RegisterReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.COUNTRY_FETCH:
      return {
        loading: true,
        error: false,
      };
    case ActionTypes.COUNTRY_FETCH_SUCCESS:
      return {
        countryList: action.payload.countryList,
        loading: false,
        error: state.error,
      };
    case ActionTypes.COUNTRY_FETCH_ERROR:
      const { error, loading, ...rest } = state;
      
      return {
        ...state,
        error: action.payload,
        loading: false,
        stateList: undefined
      };
    
    case ActionTypes.STATE_FETCH:
      return {
        ...state,
        country: action.payload.country,
        loading: true,
        error: false,
      };
    case ActionTypes.STATE_FETCH_SUCCESS:
      
      return {
        ...state,
        stateList: action.payload.stateList,
        loading: false,
        error: state.error,
        
      };
    default:
      return state;
  }
}

export default RegisterReducer;
