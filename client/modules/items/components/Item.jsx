import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';
const Item = ({ content }) => (
  <Col xs={4}>
    <Panel>
      <Row>
       <Col xs={10}>
         <h2>Thing to do</h2>
       </Col>
       <Col xs={2}>
         <a href="/edit"><Glyphicon glyph="pencil"></Glyphicon></a>
       </Col>
</Row> <Row>
       <Col xs={12}>
         <p>Some details about the thing that needs to be done.</p>
       </Col>
     </Row>
     <Row>
       <Col xs={12}>
          <Input type="checkbox" label="Complete?" />
       </Col>
     </Row>
    </Panel>
</Col>
);
export default Item;
