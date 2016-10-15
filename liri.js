var Twitter = require('twitter');
var twittkey = require('./keys.js');

// console.log(twittkey.twitterKeys);
var keys = twittkey.twitterKeys;
// console.log(keys);
var client = new Twitter(keys);
// console.log(client);
var params = {screen_name: 'nodejs'};

// console.log("Go grab my tweets");

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
//   else if (error) {
//   	console.log(error);
//   }
//   else {
//   	console.log("See, I told you it works!");
//   }
// });

// console.log(client);

var getTweets = function() {

    //my screename entered to pull tweets. (any twitter handle can be used)
    // var params = { screen_name: 'Rick_Lee' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            // for (var i = 0; i < tweets.length; i++) {
            //     console.log(tweets[i].created_at);
            //     console.log('');
            //     console.log(tweets[i].text);
            // }
        }
    });
}


var spotify = require('spotify');

var getSpot= function(){
spotify.search({ type: 'track', query: 'Open arms' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);

 
    // Do something with 'data' 
});

}

getSpot();
// getTweets();