var logins_per_day = require('./lib/logins_per_day');
var logins_over_signups_per_day = require('./lib/logins_over_signups_per_day');
var ips_per_user_per_day = require('./lib/ips_per_user_per_day');
var users_per_ips_per_day = require('./lib/users_per_ips_per_day');
var cities_per_user = require('./lib/cities_per_user');
var ipds_per_user = require('./lib/ipds_per_user');
var es = require('./lib/es');

// logins_per_day().then(function(data){
//   console.log("\n\nlogins_per_day\n");
//   console.log('AVG', data.avg);
//   console.log('Over quota', data.users);

//   es.getByUserId(data.users).then(function(users){
//     console.log(users);
//   }).catch(function(err){
//     console.log(err);
//   })

//   data.aggregations.forEach(function(day){
//     console.log(day.key);
//     day.buckets.forEach(function(user){
//       console.log("\t", user.key, "#", user.count);
//     });
//   });
// }).catch(function(err){
//   console.log(err);
// })

// logins_over_signups_per_day().then(function(data){
//   console.log("\n\nlogins_over_signups_per_day\n");
//   console.log(data);
// }).catch(function(err){
//   console.log(err);
// });

// ips_per_user_per_day().then(function(data){

//     console.log("\n\nips_per_user_per_day\n");

//     console.log('AVG', data.avg);
//     console.log('Over quota', data.users);

//     data.aggregations.forEach(function(day){
//       console.log(day.key);
//       day.buckets.forEach(function(user){
//         console.log("\t", user.key);
//         user.buckets.forEach(function(ip){
//           console.log("\t\t", ip.key, "#", ip.count );
//         });
//       });
//     });

// }).catch(function(err){
//   console.log(err);
// });

// users_per_ips_per_day().then(function(data){

//     console.log("\n\nusers_per_ips_per_day\n");

//     console.log('AVG', data.avg);
//     console.log('Over quota', data.ips);

//     es.getByIPs(data.ips).then(function(users){
//       console.log(users);
//     }).catch(function(err){
//       console.log(err);
//     })

//     data.aggregations.forEach(function(day){
//       console.log(day.key);
//       day.buckets.forEach(function(ip){
//         console.log("\t", ip.key);
//         ip.buckets.forEach(function(user){
//           console.log("\t\t", user.key, "#", user.count );
//         });
//       });
//     });

// }).catch(function(err){
//   console.log(err);
// });


// cities_per_user().then(function(data){
//   console.log("\n\ncities_per_user\n");

//   data.aggregations.forEach(function(day){
//     console.log(day.key);
//     day.buckets.forEach(function(country){
//       console.log("\t", country.key);
//       country.buckets.forEach(function(city){
//         console.log("\t\t", city.key, "#", city.count );
//       });
//     });
//   });
// }).catch(function(err){
//   console.log(err);
// });



// ipds_per_user().then(function(data){
//   console.log("\n\nipds_per_user\n");

//   data.aggregations.forEach(function(user){
//     console.log(user.key);
//     user.buckets.forEach(function(provider){
//       console.log("\t\t", provider.key, "#", provider.count );
//     });
//   });
// }).catch(function(err){
//   console.log(err);
// });