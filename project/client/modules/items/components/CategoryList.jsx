import React from 'react';
import { Row, Col, Panel, Glyphicon } from 'react-bootstrap';
const CategoryList = ({ categories }) => (
  <div>
      <Row>
        <Col xs={12}>
          <a href="/categories/new">Add New Category<Glyphicon glyph="plus" /></a>
        </Col>
      </Row>
      {categories.map(category => (
        <Col xs={3} key={category._id}>
          <Panel>
            <h2>{category.name}</h2>
          </Panel>
      </Col>
      ))}
</div>
);
export default CategoryList;
