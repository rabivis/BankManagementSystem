export interface LoginFormParams {
    userName: string;
    userPass: string;
}

export interface CurrentUser {
    user: User;
    token: string;
}

export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    profilePic: string;
    isAdmin: Boolean;
    verifyToken: string;
    isVerified: true;
    userName: string;
    address: string;
    country: string;
    state: string;
    contactNo: string;
    dateOfBirth: string;
    accountType: string;
    branchName: string;
    initialDepositAmount: number;
    identificationProofType: string;
    identificationDocumentNo: 0;
    createdAt: string;
    updatedAt: string;
}