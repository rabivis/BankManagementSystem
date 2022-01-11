import { FormErrors } from 'redux-form';
import { RegisterFormParams } from './Register';

const RegisterFormvalidate = (values: RegisterFormParams): FormErrors<RegisterFormParams> => {
    const errors: FormErrors<RegisterFormParams> = {};

    if (!values.customerName) {
      errors.customerName = 'Customer name is required';
    } else if (!/^[a-zA-Z\s]+$/i.test(values.customerName)) {
      errors.customerName = 'Invalid Customer Name'
    }

    if (!values.userName) {
      errors.userName = 'Username is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (!values.confPassword) {
      errors.confPassword = 'Confirm  Password is required';
    } else if(values.confPassword !== values.password){
      errors.password = 'Confirm password does not match'
    }

    if (!values.address) {
      errors.address = 'Address is required';
    }

    if (!values.country) {
      errors.country = 'Country is required';
    }

    if (!values.state) {
      errors.state = 'State is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.contactNumber) {
      errors.contactNumber = 'Contact Number is required';
    } else if (isNaN(Number(values.contactNumber))) {
      errors.contactNumber = 'Must be a number';
    } else if (values.contactNumber.length !== 10) {
      errors.contactNumber = 'Must be 10 characters';
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Date Of Birth is required';
    }

    if (!values.accountType) {
      errors.accountType = 'Account Type is required';
    }

    if (!values.branchName) {
      errors.branchName = 'Branch Name is required';
    }

    if (!values.initialDepositAmount) {
      errors.initialDepositAmount = 'Initial Deposit Amount is required';
    }

    if (!values.identificationProofType) {
      errors.identificationProofType = 'Identification Proof Type is required';
    }

    if (!values.identificationDocumentNo) {
      errors.identificationDocumentNo = 'Identification Document No is required';
    }
    return errors;
};
export default RegisterFormvalidate;