var es = require('./es');
var _ = require('lodash');

module.exports = function(cb) {

  return es.search({
    "body": {
      "size":0,
      "aggs" : {
        "users":{
          "terms":{
            "field":"user_id"
          }
          ,"aggs" : {
            "countries":{
              "terms":{
                "field":"geoip.country_name"
              }
              ,"aggs" : {
                "cities":{
                  "terms":{
                    "field":"geoip.city"
                  }
                }
              }
            }
          }
        }
      }
    }
  }).then(function(response){
    var buckets = response.aggregations.users.buckets.map(function(bucket){

      return {
        key:bucket.key,
        buckets: bucket.countries.buckets.map(function(bucket) {
          return {
            key: bucket.key,
            buckets: bucket.cities.buckets.map(function(bucket) {
              return {
                key:bucket.key,
                count:bucket.doc_count
              }
            })
          };
        })
      }
    });

    return {
      aggregations:buckets
    };
  });

}