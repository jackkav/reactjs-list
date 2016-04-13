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
    'items.edit'(name, description, due) {
      check(name, String);
      check(description, String);
      check(due, String);
      const updatedAt = new Date();
      const item = { name, description, due, updatedAt };
      Items.update({ name: item.name },
         { $set: { description: item.description, due: item.due, updatedAt: item.updatedAt } });
    },
    'items.markComplete'(complete, itemId) {
      check(complete, Boolean);
      check(itemId, String);
      Items.update(itemId, { $set: { complete } });
    },
    'items.vote'(voteType, itemId) {
      check(voteType, String);
      check(itemId, String);
      if (voteType === 'yes') {
        Items.update(itemId, { $inc: { yes: 1 } });
      }
      if (voteType === 'no') {
        Items.update(itemId, { $inc: { no: 1 } });
      }
    },
  });
}
