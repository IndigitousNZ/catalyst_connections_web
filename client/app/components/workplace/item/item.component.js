class ItemController {
  constructor(
    $state,
    users
  ) {
    this.$state = $state;
    this.users = users;
  }

  save() {
    this.users.updatePoint(this.item).then(() => {
      this.$state.go('points');
    });
  }
}

let Item = {
  bindings: {
    item: '<'
  },
  template: require('./item.html'),
  controller: ItemController
};

export default angular.module('app.components.workplace.item.component', [
]).component('workplaceItem', Item).name;
