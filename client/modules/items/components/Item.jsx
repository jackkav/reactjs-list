import React from 'react';
import moment from 'moment';
import { Row, Col, Panel, Glyphicon, Input, Button } from 'react-bootstrap';
import ItemProgress from './ItemProgress.jsx';
class Item extends React.Component {
  render() {
    const { item } = this.props;
    const style = { 'border': 'solid 1px #e3e3e3' };
    const yesStyle = { 'color': 'green' };
    const noStyle = { 'color': 'red' };
    return (
  <Col xs={4}>
     <Panel style={style}>
      <Row>
       <Col xs={10}>
         <h2>{item.name}</h2>
       </Col>
       {Meteor.userId()?
       <Col xs={2}>
         <a href={`/delete/${item._id}`}><Glyphicon glyph="remove"></Glyphicon></a>
         <a href={`/edit/${item._id}`}><Glyphicon glyph="pencil"></Glyphicon></a>
       </Col>
       :''}
     </Row>
      <Row>
       <Col xs={12}>
         <p>{item.description}</p>
         <p>Decision date: {moment(Number(item.due)).format('DD/MM/YYYY')}</p>
       </Col>
     </Row>
     <Row>
       <Col xs={12}>
         <ItemProgress percentage={this.getPercentage(item.yes, item.no)} />
       </Col>
     </Row>
     <Row>
       <Col xs={6}>
          <Button ref="voteYes" type="button" style={yesStyle} onClick={this.voteYes.bind(this)}>Vote Yes</Button>
       </Col>
         <Col xs={6}>
            <Button ref="voteNo" type="button" style={noStyle} onClick={this.voteNo.bind(this)}>Vote No</Button>
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
    Meteor.call('items.vote', 'yes', itemId);
  }
  voteNo() {
    const itemId = this.props.item._id;
    Meteor.call('items.vote', 'no', itemId);
  }
  getPercentage(yes, no) {
    if (!yes && !no) return 50;
    if (!yes) return 0;
    if (!no) return 100;
    return Number(yes / (yes + no) * 100);
  }
}
export default Item;
