export default {
  create({ Meteor, LocalState, FlowRouter }, name, description, due) {
    if (!name) {
      return LocalState.set('CREATE_ITEM_ERROR', 'Item name is required.');
    }
    LocalState.set('CREATE_ITEM_ERROR', null);
    Meteor.call('items.create', name, description, due, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      return true;
    });
    return FlowRouter.go('/');
  },
  edit({ Meteor, LocalState, FlowRouter }, id, name, description, due) {
    if (!name) {
      return LocalState.set('CREATE_ITEM_ERROR', 'Item name is required.');
    }
    LocalState.set('CREATE_ITEM_ERROR', null);
    Meteor.call('items.edit', id, name, description, due, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      return true;
    });
    return FlowRouter.go('/');
  },
  clearErrors({ LocalState }) {
    return LocalState.set('SAVING_ERROR', null);
  },
};
