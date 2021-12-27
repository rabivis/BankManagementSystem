import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { CountryList, StateList, Country } from './Register.d';

/* --- STATE --- */

interface RegisterState {
    readonly loading: boolean;
    readonly error?: object | boolean;
    readonly countryList?: CountryList;
    readonly stateList?:  StateList;
    readonly country?: Country;
}

/* --- ACTIONS --- */
type RegisterActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = RegisterState;
type ContainerActions = RegisterActions;

export { ContainerState, ContainerActions };
