
var Twitter=require('twitter');
var twittkey = require('./keys.js');
// console.log(twittkey.twitterKeys);
var keys=twittkey.twitterKeys;
// console.log(keys);
var client = new Twitter({
	keys
})
console.log(client);

// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });
// client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body. 
//   console.log(response);  // Raw response object. 
// });