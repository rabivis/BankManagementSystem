import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';
import LoginForm from './LoginForm';

export default function LoginPage() {
    return (
        <Container>
            <Helmet>
                <title>Login</title>
                <meta
                    name="description"
                    content="Login form for login in Bank Management System"
                />
            </Helmet>
            <Row>
                <Col sm="2" />
                <Col>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Sing In
                        </CardTitle>
                        <LoginForm />
                    </CardBody>
                </Card>
                    
                </Col>
                <Col sm="2" />
            </Row>
        </Container>
    );
}