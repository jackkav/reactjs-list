import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import ItemProgress from '../../items/components/ItemProgress.jsx';
const Layout = ({content}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageHeader>Impossible List </PageHeader>
      </Col>
</Row> <Row>
       <Col xs={12} sm={6}>
         <ItemProgress />
       </Col>
     </Row>
     {content()}
</Grid>
);
export default Layout;
