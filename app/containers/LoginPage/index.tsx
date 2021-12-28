import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from './LoginForm';
import Helpdesk from 'components/Helpdesk';


export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
                <meta
                    name="description"
                    content="Login form for login in Bank Management System"
                />
            </Helmet>
            <Helpdesk />
            <div className="row justify-content-center">
                <div className="text-center" id="test">Sign In</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11">
                    <div className="form-card">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}