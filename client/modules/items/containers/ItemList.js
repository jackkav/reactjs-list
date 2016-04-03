 import ItemList from '../components/ItemList.jsx';
 import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
 export const composer = ({ context }, onData) => {
   const { Meteor, Collections } = context();
   if (Meteor.subscribe('items.list').ready()) {
     const items = Collections.Items.find().fetch();
     onData(null, { items });
   }
 };
 export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
