import gql from 'graphql-tag';
import map from 'lodash/fp/map';

class Points {
    constructor(api) {
      this.api = api;
      this.data = [];
    }

    load(reset = false) {
      if (this.data.length > 0 && !reset) {
        Promise.resolve(this.data);
      }

      return this.api.query(gql`
        query {
          points {
            edges {
              node {
                address_line_1
                address_line_2
                suburb
                city
                country
                zip
                latitude
                longitude
                resource {
                  ... on User {
                    first_name
                    last_name
                    avatar_url
                    facebook_url
                  }
                }
              }
            }
          }
        }
      `).then((data) => {
        this.data = map((point) => point.node, data.points.edges);
        return this.data;
      });
    }
}


export default angular.module('app.components.points.service', [
]).service('points', Points).name;
