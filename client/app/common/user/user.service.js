import gql from 'graphql-tag';

class User {
    constructor(api) {
      this.api = api;
    }

    load(reset = false) {
      if (this.data && !reset) {
        Promise.resolve(this.data);
      }

      return this.api.query(gql`
        query {
          me {
            first_name
            last_name
            avatar_url
            point {
              address_line_1
              address_line_2
              suburb
              city
              country
              zip
              latitude
              longitude
            }
          }
        }
      `).then((data) => {
        this.data = data.me;
        return this.data;
      })
    }

    updateUser(user) {
      return this.api.mutate(gql`
        mutation updateUser($first_name: String!, $last_name: String!) {
          updateUserMutatation(input: {
            first_name: $first_name,
            last_name: $last_name
          }) {
            user {
              first_name
              last_name
              avatar_url
              point {
                address_line_1
                address_line_2
                suburb
                city
                country
                zip
                latitude
                longitude
              }
            }
          }
        }
      `, user).then((data) => {
        this.data = data.user;
        return this.data;
      })
    }

    updatePoint(point) {
      return this.api.mutate(gql`
        mutation updatePoint($address_line_1: String, $address_line_2: String, $suburb: String, $city: String,
                             $country: String, $zip: String, $latitude: Float!, $longitude: Float!) {
          updatePointMutation(input: {
            address_line_1: $address_line_1,
            address_line_2: $address_line_2,
            suburb: $suburb,
            city: $city,
            country: $country,
            zip: $zip,
            latitude: $latitude,
            longitude: $longitude
          }) {
            point {
              address_line_1
              address_line_2
              suburb
              city
              country
              zip
              latitude
              longitude
            }
          }
        }
      `, point).then((data) => {
        this.data.point = data.updatePointMutation.point;
        return this.data.point;
      });
    }

    logout() {
      return this.api.logout().then(() => {
        this.data = null;
      })
    }
}


export default angular.module('app.common.user.service', [
]).service('user', User).name;
