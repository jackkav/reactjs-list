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
      edit(this.props.itemId, name.getValue(), description.getValue(), due.getValue());
    }
    else {
      const { create } = this.props;
      const { name, description, due } = this.refs;
      create(name.getValue(), description.getValue(), due.getValue());
      name.getInputDOMNode().value = '';
      description.getInputDOMNode().value = '';
    }
  }
  render() {
    const { item, error } = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
          <h1>{item ? 'Edit' : 'Add'} Item</h1>
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          <form>
            <Input ref="name" type="text" placeholder="Name"
              defaultValue={item ? item.name : ''} />
            <Input ref="description" type="textarea" placeholder="Description"
              defaultValue={item ? item.description : ''} />
            <DateTimeField ref="due" inputFormat="DD/MM/YYYY"
              defaultText={item ? moment(Number(item.due)).format('DD/MM/YYYY') : moment().format('DD/MM/YYYY')} />
            <ButtonInput onClick={this.createItem.bind(this)}
              bsStyle="primary" type="submit" value="Save Item" />
          </form>
        </Panel>
     </Col>
   );
  }
   }
export default EditItem;
