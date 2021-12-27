
enum ActionTypes {
    REGISTER_USER = 'bankmanagementsystem/REGISTER_USER',
    REGISTER_USER_SUCCESS = 'bankmanagementsystem/REGISTER_USER_SUCCESS',
    REGISTER_USER_ERROR = 'bankmanagementsystem/REGISTER_USER_ERROR',

    COUNTRY_FETCH = 'bankmanagementsystem/COUNTRY_FETCH',
    COUNTRY_FETCH_SUCCESS = 'bankmanagementsystem/COUNTRY_FETCH_SUCCESS',
    COUNTRY_FETCH_ERROR = 'bankmanagementsystem/COUNTRY_FETCH_ERROR',

    STATE_FETCH = 'bankmanagementsystem/STATE_FETCH',
    STATE_FETCH_SUCCESS = 'bankmanagementsystem/STATE_FETCH_SUCCESS',
  }
  
  export default ActionTypes;
  
  

export const AccountTypes: object[] = [
    { label: 'Salary', value: 'salary' },
    { label: 'Saving', value: 'saving' }
  ];
