import React from 'react';
import { Row, Col, Panel, Glyphicon, Input } from 'react-bootstrap';
class Item extends React.Component {
  render() {
    const {item} = this.props;
    return (
  <Col xs={4}>
    <Panel>
      <Row>
       <Col xs={10}>
         <h2>{item.name}</h2>
       </Col>
       <Col xs={2}>
         <a href={`/edit/${item._id}`}><Glyphicon glyph="pencil"></Glyphicon></a>
       </Col>
     </Row>
      <Row>
       <Col xs={12}>
         <p>{item.description}</p>
       </Col>
     </Row>
     <Row>
       <Col xs={12}>
          <Input ref="complete" type="checkbox"
            label="Complete?" onChange={this.markComplete.bind(this)} />
       </Col>
     </Row>
    </Panel>
</Col>
);
  }
  markComplete() {
    const complete = this.refs.complete.getChecked();
    const itemId = this.props.item._id;
    Meteor.call('items.markComplete', complete, itemId);
  }
}
export default Item;
