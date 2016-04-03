const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemList from '../ItemList.jsx';
describe('items.components.itemList', () => {
  it('should display the text', () => {
    const el = shallow(<ItemList />);
    expect(el.find('p').text()).to.be.match(/This is where the items will be./);
  });
});
