import React, { useEffect } from 'react';
import { Form, FormGroup, Button } from "reactstrap";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReduxFormInput from 'components/Inputs/ReduxFormInput';
import ReduxFormSelect from 'components/Inputs/ReduxFormSelect';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AccountTypes } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryList, fetchStateList, submitUserRegister } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectCountryList, makeSelectLoading, makeSelectError, makeSelectStateList } from './selectors';
import RegisterFormvalidate from './RegisterFormvalidate';
import reducer from './reducer';
import saga from './saga';
import { CountryList, FromSelectArray, StateList } from './Register.d';

interface Props {
    handleSubmit;
    pristine;
    submitting;
    isLoading;
};
const key = "register";

const stateSelector = createStructuredSelector({
    countryList: makeSelectCountryList(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    stateList: makeSelectStateList()
});

export function RegisterForm(props: Props) {

    const dispatch = useDispatch();
    const { handleSubmit, submitting, pristine, isLoading } = props;
    const { countryList, loading, error, stateList } = useSelector(stateSelector);

    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    useEffect(() => {
        dispatch(fetchCountryList());
    }, [])
    const localSubmithandle = (values: any) => {
        dispatch(submitUserRegister(values));
    }
    const handleCountryChange = (event) => {

        dispatch(fetchStateList(event.target.value));
    }
    const farmatCountryList = (countryList: CountryList | undefined) => {
        const newCountryList: FromSelectArray[] = [];
        if (countryList !== undefined && countryList.countryList !== undefined) {
            countryList.countryList.map((item) => {
                newCountryList.push({ label: `${item.name} [${item.native}]`, value: item.iso2 });
            })
        }
        return newCountryList;
    }
    const farmatStateList = (stateList: StateList | undefined) => {
        const newStateList: FromSelectArray[] = [];
        if (stateList !== undefined && stateList.stateList !== undefined) {
            stateList.stateList.map((item) => {
                newStateList.push({ label: item.name, value: item.iso2 });
            })
        }
        return newStateList;
    }
    return (
        <Form onSubmit={handleSubmit(localSubmithandle)} noValidate={true}>
            <Field
                name="customerName"
                type="text"
                component={ReduxFormInput}
                label="Customer Name *"
                placeHolder="Enter Customer Name"
            />
            <Field
                name="userName"
                type="text"
                component={ReduxFormInput}
                label="User Name *"
                placeHolder="Enter User Name"
            />
            <Field
                name="password"
                type="pasword"
                component={ReduxFormInput}
                label="User Password *"
                placeHolder="Enter User Password"
            />
            <Field
                name="confPassword"
                type="password"
                component={ReduxFormInput}
                label="User confirm password *"
                placeHolder="Enter confirm password"
            />
            <Field
                name="address"
                type="text"
                component={ReduxFormInput}
                label="Address *"
                placeHolder="Enter address"
            />
            <Field
                name="country"
                type="text"
                values={farmatCountryList(countryList)}
                component={ReduxFormSelect}
                label="Country *"
                placeHolder="Enter Country"
                onChange={handleCountryChange}
            />
            <Field
                name="state"
                type="text"
                component={ReduxFormSelect}
                label="State *"
                placeHolder="Enter State"
                values={farmatStateList(stateList)}
            />
            <Field
                name="email"
                type="email"
                component={ReduxFormInput}
                label="User Email Address *"
                placeHolder="Enter User Email Address"
            />
            <Field
                name="contactNo"
                type="text"
                component={ReduxFormInput}
                label="Contact No *"
                placeHolder="Enter Contact No"
            />
            <Field
                name="dateOfBirth"
                type="date"
                component={ReduxFormInput}
                label="Date Of Birth *"
                placeHolder="Enter Date Of Birth in DD/MM/YYYY"
            />
            <Field
                name="accountType"
                type="text"
                values={AccountTypes}
                component={ReduxFormSelect}
                label="Account Type *"
                placeHolder="Please select account type"
            />
            <Field
                name="branchName"
                type="text"
                component={ReduxFormInput}
                label="Branch Name *"
                placeHolder="Please select branch name"
            />
            <Field
                name="initialDepositAmount"
                type="number"
                component={ReduxFormInput}
                label="Initial Deposit Amount *"
                placeHolder="Enter Initial Deposit Amount"
            />
            <Field
                name="identificationProofType"
                type="text"
                component={ReduxFormInput}
                label="Identification Proof Type *"
                placeHolder="Enter Identification Proof Type"
            />
            <Field
                name="identificationDocumentNo"
                type="text"
                component={ReduxFormInput}
                label="Identification Document No *"
                placeHolder="Enter Identification Document No"
            />
            <Button
                className="float-right"
                color="success"
                type="submit"
                style={{ marginRight: '10px' }}
                disabled={pristine || submitting}
            >
                {isLoading && <>Saving...</>}
                {!isLoading && <>Save</>}
            </Button>
            <br />
            <br />
            <br />
            <br />
        </Form>
    )
}

const form = reduxForm<{}, Props>({
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false,
    form: 'registerForm',
    validate: RegisterFormvalidate

})(RegisterForm);

export default connect(null)(form);