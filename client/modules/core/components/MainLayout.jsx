import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
const Layout = ({ content }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <a href="/login">Login</a> | <a href="/register">Register</a>
        <PageHeader>{Meteor.userId()?'Welcome '+Meteor.user().username+ ' what you waiting for vote for something' :'Vote for pedro'} </PageHeader>
      </Col>
    </Row>
     {content()}
</Grid>
);
export default Layout;
