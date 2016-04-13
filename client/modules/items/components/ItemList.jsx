import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
const ItemList = ({ items, percentage }) => (
  <Row>
    <Row>
      <Col xs={12}>
        <Button type="button" href="/edit"><Glyphicon glyph="plus" /> New Item</Button>
      </Col>
    </Row>
    <Row className="show-grid">
      {items && items.map(item => (
       <Item key={item._id} item={item} />
       ))}
    </Row>
  </Row>
);
export default ItemList;
