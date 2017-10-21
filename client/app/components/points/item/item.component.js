class ItemController {
  constructor(
    $window
  ) {
    this.$window = $window;
  }

  go() {
    this.$window.open(this.item.resource.facebook_url, '_blank');
  }
}

let Item = {
  bindings: {
    item: '<'
  },
  template: require('./item.html'),
  controller: ItemController
};

export default angular.module('app.components.item.component', [
]).component('pointsItem', Item).name;
