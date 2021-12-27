export interface LoginFormParams {
    userName: string;
    userPass: string;
}

export interface CurrentUser {
    firstName: string;
    lastName: string;
    token: string;
}