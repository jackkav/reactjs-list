import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
class EditItem extends React.Component {
  createItem(e) {
    e.preventDefault();
    if (this.props.itemId) {
      const { edit } = this.props;
      const { name, description, due } = this.refs;
      console.log(this.props.itemId);
      edit(name.getValue(), description.getValue(), due.getValue());
    }
    else {
      const { create } = this.props;
      const { name, description, due } = this.refs;
      console.log(this.props.itemId);
      create(name.getValue(), description.getValue(), due.getValue());
      name.getInputDOMNode().value = '';
      description.getInputDOMNode().value = '';
    }

  }
  render() {
    const { item } = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
          <h1>{item ? 'Edit' : 'Add'} Item</h1>
          <form>
            <Input ref="name" type="text" placeholder="Name"
              defaultValue={item ? item.name : ''} />
            <Input ref="description" type="textarea" placeholder="Description"
              defaultValue={item ? item.description : ''} />
            <DateTimeField ref="due" inputFormat="MM/DD/Y"
              defaultText={item ? moment(Number(item.due)).format('MM/DD/Y') : ''} />
            <ButtonInput onClick={this.createItem.bind(this)}
              bsStyle="primary" type="submit" value="Save Item" />
          </form>
        </Panel>
     </Col>
   );
  }
   }
export default EditItem;
