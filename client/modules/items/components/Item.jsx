import React from 'react';
import moment from 'moment';
import { Row, Col, Panel, Glyphicon, Input, Button } from 'react-bootstrap';
class Item extends React.Component {
  render() {
    const { item, currentDate } = this.props;
    const style = item.due < currentDate ? { 'border': 'solid 1px red' }
                                       : { 'border': 'solid 1px #e3e3e3' };
    return (
  <Col xs={4}>
     <Panel style={style}>
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
         <p>{item.description}{item.due ? '- ' + moment(Number(item.due)).format('MM/DD/YYYY') : ''}</p>
       </Col>
     </Row>
     <Row>
       <Col xs={12}>
          <Input ref="complete" type="checkbox"
            label="Complete?" onChange={this.markComplete.bind(this)} />
       </Col>
     </Row>
     <Row>
       <Col xs={6}>
          <Button ref="voteYes" type="button" onClick={this.voteYes.bind(this)}>Vote Yes</Button>
       </Col>
         <Col xs={6}>
            <Button ref="voteNo" type="button" onClick={this.voteNo.bind(this)}>Vote No</Button>
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
  voteYes() {
    const itemId = this.props.item._id;
    Meteor.call('items.vote', "yes", itemId);
  }
  voteNo() {
    const itemId = this.props.item._id;
    Meteor.call('items.vote', "no", itemId);
  }
}
export default Item;
