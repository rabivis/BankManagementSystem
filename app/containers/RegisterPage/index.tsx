import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
    return (
        <Container>
            <Helmet>
                <title>Sign Up</title>
                <meta
                    name="description"
                    content="Registration form for register in Bank Management System"
                />
            </Helmet>
            <Row>
                <Col sm="2" />
                <Col>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            Sing Up
                        </CardTitle>
                        <RegisterForm />
                    </CardBody>
                </Card>
                    
                </Col>
                <Col sm="2" />
            </Row>
        </Container>
    );
}