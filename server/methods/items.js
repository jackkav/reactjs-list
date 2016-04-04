import { Categories, Items } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
export default function () {
  Meteor.methods({
    'categories.create'(name) {
      check(name, String);
      const createdAt = new Date();
      const category = { name, createdAt };
      Categories.insert(category);
    },
    'items.create'(name, description, due) {
      check(name, String);
      check(description, String);
      check(due, String);
      const createdAt = new Date();
      const item = { name, description, due, createdAt };
      Items.insert(item);
    },
    'items.markComplete'(complete, itemId) {
      check(complete, Boolean);
      check(itemId, String);
      Items.update(itemId, { $set: { complete } });
    },
  });
}
