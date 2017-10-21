class ItemController {
  constructor(
    $state,
    user
  ) {
    this.$state = $state;
    this.user = user;
  }

  save() {
    this.user.updatePoint(this.item).then(() => {
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
