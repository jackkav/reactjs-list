import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import ItemProgress from './ItemProgress.jsx';
const ItemList = ({ items, percentage }) => (
  <Row>
    <Row>
      <Col xs={12} sm={6}>
        <ItemProgress percentage={percentage} />
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12}>
        <a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
      </Col>
      {items.map(item => (
       <Item key={item._id} item={item} />
       ))}
    </Row>
  </Row>
);
export default ItemList;
