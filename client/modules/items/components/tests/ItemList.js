const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemList from '../ItemList.jsx';
import ItemProgress from '../ItemProgress.jsx';
// describe('items.components.itemList', () => {
//   it('should display the text', () => {
//     const el = shallow(<ItemList />);
//     expect(el.find('p').text()).to.be.match(/This is where the items will be./);
//   });
// });
describe('<ItemList />', () => {
  it('renders one <ItemProgress /> component', () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper.find(ItemProgress)).to.have.length(1);
  });
});
