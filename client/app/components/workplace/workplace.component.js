import each from 'lodash/fp/each';
import reduce from 'lodash/fp/reduce';

class WorkplaceController {
  constructor(
    GeoCoder
  ) {
    this.GeoCoder = GeoCoder;
    this.address = '';
  }
  lookupAddress() {
    this.GeoCoder.geocode({ address: this.address }).then((places) => {
      this.addresses = reduce((result, place) => {
        let address = {
          address_line_1: '',
          address_line_2: '',
          suburb: '',
          city: '',
          country: '',
          zip: '',
          latitude: '',
          longitude: ''
        };

        each((component) => {
          switch (component.types[0]) {
            case 'subpremise':
            address.address_line_1 += component.long_name + '/';
            break;
            case 'street_number':
            address.address_line_1 += component.long_name + ' ';
            break;
            case 'route':
            address.address_line_1 += component.long_name;
            break;
            case 'administrative_area_level_3':
            address.suburb = component.long_name;
            break;
            case 'country':
            address.country = component.long_name;
            break;
            case 'postal_code':
            address.zip = component.long_name;
            break;
            case 'locality':
            address.city = component.long_name;
            break;
          }
        }, place.address_components);

        address.latitude = place.geometry.location.lat();
        address.longitude = place.geometry.location.lng();

        result.push(address);
        return result;
      }, [], places);
    });
  }
}

let Workplace = {
  bindings: {},
  template: require('./workplace.html'),
  controller: WorkplaceController
};

export default angular.module('app.components.workplace.component', [
]).component('workplace', Workplace).name;
