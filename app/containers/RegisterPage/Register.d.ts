import internal from "assert";

export interface CountryList{
    countryList: Country[];
}

export interface Country{
    id: number;
    name: string;
    native: string;
    iso2: string;
}

export interface StateList{
    stateList: Country[];
}

export interface State{
    stateName: string;
}

export interface RegisterFormParams {
    customerName: string;
    userName: string;
    password: string;
    confPassword: string;
    address: string;
    country: Country;
    state: State;
    email: string;
    contactNo: string;
    dateOfBirth: string;
    accountType: string;
    branchName: string;
    initialDepositAmount: number;
    identificationProofType: string;
    identificationDocumentNo: string;
}

export interface FromSelectArray{
    label: string;
    value: string;
}

export interface SuccessMsgRegister{
    successMsg: String;
}