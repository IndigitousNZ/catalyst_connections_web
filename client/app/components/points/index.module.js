import Points from './points.component';
import Item from './item/item.component';
import Service from './points.service';

export default angular.module('app.components.points', [
  Points,
  Item,
  Service
]).name
