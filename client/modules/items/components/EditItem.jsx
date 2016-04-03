import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
const EditItem = ({ content }) => (
  <Col xs={12} sm={6} smOffset={3}>
     <Panel>
        <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
        <h1>Edit Item</h1>
        <form>
           <Input type="text" placeholder="Name" />
           <Input type="textarea" placeholder="Description" />
           <DateTimeField />
           <ButtonInput bsStyle="primary" type="submit" value="Save Item" />
        </form>
      </Panel>
</Col>
);
export default EditItem;
