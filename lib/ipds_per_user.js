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
          },
          "aggs" : {
            "providers":{
              "terms":{
                "field":"provider"
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
        buckets: bucket.providers.buckets.map(function(bucket) {
          
          return {
            key:bucket.key,
            count:bucket.doc_count
          }
        })
      }
    });

    return {
      aggregations:buckets
    };
  });

}