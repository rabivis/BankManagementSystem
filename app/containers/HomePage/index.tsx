import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Helpdesk from 'components/Helpdesk';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../LoginPage/selectors';
import { useHistory } from 'react-router-dom';

const stateSelector = createStructuredSelector({
    currentUser: makeSelectCurrentUser()
});



export default function HomePage() {

    const { currentUser } = useSelector(stateSelector);
    const history = useHistory();

    useEffect(() => {
        if (currentUser === undefined) {
            history.push("/login");
        }
    }, [])


    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="Home page of Bank Management System"
                />
            </Helmet>
            <Helpdesk />
            <div className="row justify-content-center">
                <div className="text-center" id="test">Dashboard</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11">
                    <div className="form-card">
                        Home Page
                    </div>
                </div>
            </div>
        </>
    );
}