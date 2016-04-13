import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
const Layout = ({ content }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageHeader>Vote for pedro</PageHeader>
      </Col>
</Row>
     {content()}
</Grid>
);
export default Layout;
