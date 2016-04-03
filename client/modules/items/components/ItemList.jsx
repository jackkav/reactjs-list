import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import ItemProgress from './ItemProgress.jsx';
const ItemList = ({ content }) => (
  <Row>
    <Row>
      <Col xs={12} sm={6}>
        <ItemProgress />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12}>
        <Item />
      </Col>
    </Row>
  </Row>
);
export default ItemList;
