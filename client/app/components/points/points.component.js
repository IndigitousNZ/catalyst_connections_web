class PointsController {
  constructor(
    points
  ) {
    this.points = points;
  }

  $onInit() {
    this.loading = true;
    this.points.load(true).then(() => {
      this.loading = false;
    })
  }
}

let Points = {
  bindings: {},
  template: require('./points.html'),
  controller: PointsController
};

export default angular.module('app.components.points.component', [
]).component('points', Points).name;
