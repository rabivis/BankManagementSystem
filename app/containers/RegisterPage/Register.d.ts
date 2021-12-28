import internal from "assert";

export interface CountryList{
    countryList: Country[];
}

export interface Country{
    countryName: string;
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
    contactNumber: string;
    dateOfBirth: string;
    accountType: string;
    branchName: string;
    initialDepositAmount: number;
    identificationProofType: string;
    identificationDocumentNo: string;
}