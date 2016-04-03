import React from 'react';
import Item from './Item.jsx';
import { Row, Col } from 'react-bootstrap';
const ItemList = ({content}) => (
  <Row className="show-grid">
    <Col xs={12}>
      <Item />
    </Col>
</Row>
);
export default ItemList;
