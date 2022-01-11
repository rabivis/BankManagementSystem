import React, { useEffect } from 'react';
import { Form, FormGroup, Button } from "reactstrap";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReduxFormInput from 'components/Inputs/ReduxFormInput';
import ReduxFormSelect from 'components/Inputs/ReduxFormSelect';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AccountTypes } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryList, fetchStateList } from './actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectCountryList, makeSelectLoading, makeSelectError, makeSelectStateList } from './selectors';
import RegisterFormvalidate from './RegisterFormvalidate';
import reducer from './reducer';
import saga from './saga';

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
    const { handleSubmit,submitting, pristine, isLoading} = props;
    const { countryList, loading, error, stateList } = useSelector(stateSelector);

        console.log({countryList, stateList})
    useInjectReducer({ key: key, reducer: reducer });
    useInjectSaga({ key: key, saga: saga });

    useEffect(() => {
        dispatch(fetchCountryList());
    },[]) 
    const localSubmithandle = (values: any) => {
        console.log({values})
    }
    const handleCountryChange = (event) => {
        
        dispatch(fetchStateList(event.target.value));
    } 
    return(
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
                    values={countryList}
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
                    values={stateList}
                />
                <Field
                    name="email"
                    type="email"
                    component={ReduxFormInput}
                    label="User Email Address *"
                    placeHolder="Enter User Email Address"
                />
                <Field
                    name="contactNumber"
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
                    {isLoading && <>Saving...</> }
                    {!isLoading && <>Save</> }
                </Button>
                <br/>
                <br/>
                <br/>
                <br/>
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