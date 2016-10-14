var twitt = require('./keys.js');
console.log("Twitt");
console.log(twitt.twitterKeys);

client.get('search/tweets', {q: 'Rick_W_Lee'}, function(error, tweets, response) {
   console.log(tweets);
});
