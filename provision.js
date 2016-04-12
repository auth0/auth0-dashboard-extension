var es = require('./lib/es');

for(var a = 0; a < 100; a++) {
  es.add({
      last_login: '2016-04-' + ("0" + parseInt(Math.random() * 5)).substr(-2),
      user_id: 'user|' + parseInt(Math.random() * 3),
      logins_count:parseInt(Math.random() * 3),
      provider: 'twitter',
      ip:"190.136.46.221",
      userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36",
      geoip: { "country_code":"AR", "country_code3":"ARG", "country_name":"Argentina", "region":"08", "city":"Federal", "postal_code":"3180", "latitude":-30.954599380493164, "longitude":-58.78329849243164, "continent_code":"SA", "time_zone":"America/Argentina/Buenos_Aires" }
    })
}