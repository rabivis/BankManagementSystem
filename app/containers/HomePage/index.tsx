import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
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
        <Container>
            <Helmet>
                <title>Home</title>
                <meta
                    name="description"
                    content="Home page of Bank Management System"
                />
            </Helmet>
            <Row>
                <Col sm="2" />
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                                Home page
                            </CardTitle>
                            Body Here
                        </CardBody>
                    </Card>

                </Col>
                <Col sm="2" />
            </Row>
        </Container>
    );
}