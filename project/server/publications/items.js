import { Categories, Items } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('categories.list', function () {
    return Categories.find();
  });
  Meteor.publish('items.list', function () {
    return Items.find({}, { sort:{ yes: -1 } });
  });
  Meteor.publish('items.single', function (itemId) {
    check(itemId, String);
    const selector = { _id: itemId };
    return Items.find(selector);
  });
}
