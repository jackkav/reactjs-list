import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
const Layout = ({ content }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        {
          Meteor.userId() ?
          <Row>Welcome {Meteor.user().username} <a href="/logout">Logout</a> </Row>
          :
          <Row><a href="/login">Login</a> | <a href="/register">Register</a></Row>
        }
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <PageHeader>{Meteor.userId() ? 'What you waiting for vote for something' : 'Vote for pedro'} </PageHeader>
      </Col>
    </Row>
     {content()}
</Grid>
);
export default Layout;
