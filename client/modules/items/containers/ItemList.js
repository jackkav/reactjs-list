 import ItemList from '../components/ItemList.jsx';
 import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
 export const composer = ({ context }, onData) => {
   const { Meteor, Collections } = context();
   if (Meteor.subscribe('items.list').ready()) {
     const items = Collections.Items.find({}, { sort: { due: -1, yes: -1 } }).fetch();
     const totalItems = Collections.Items.find().count();
     const completedItems = Collections.Items.find({ complete: true }).count();
     const percentage = Math.round((completedItems / totalItems) * 100);
     onData(null, { items, percentage });
   }
 };
 export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
