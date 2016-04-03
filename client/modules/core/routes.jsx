import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import ItemList from '../items/components/ItemList.jsx';
import EditItem from '../items/components/EditItem.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);
  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
 })

FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)

      });
    }
});
}
