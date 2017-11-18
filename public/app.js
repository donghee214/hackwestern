  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyD_SU5wyRObYdOGrlGKevIkVHuIQ2qvw1k",
    authDomain: "hackwestern-75904.firebaseapp.com",
    databaseURL: "https://hackwestern-75904.firebaseio.com",
    projectId: "hackwestern-75904",
    storageBucket: "hackwestern-75904.appspot.com",
    messagingSenderId: "790927679169"
  };



 

  firebase.initializeApp(config);

  var rootRef = firebase.database().ref().child('songs');
  var artistRef = rootRef.child('artists')
  var voteCountRef = rootRef.child('voteCount')

  //write function
  function writeSongData(songId, name, artists, album, preview_url, vote){
    //Data Structure
    var songData = {name:name,
      artists: artists,
      album: album, 
      preview_url: preview_url,
      voteCount: vote
    }
    
    //add song
    var newSongKey = firebase.database().ref().child('songs/'+ songId).set(songData)
  }

  writeSongData("1234","No peace", "Sam Smith","Thrill of it all", "abcd",20 );
  writeSongData("1235","Burning", "Sam Smith","Thrill of it all", "cdef",22 );
  writeSongData("1236","Dusk till Dawn", "ZAYN","Single", "atsgsd",21 );
  writeSongData("1237","Therapy", "Khalid","American Teen", "atsgsfsdf",16 );

  //Read Top Songs
  var topSongsList = []
  var topSongs= rootRef.orderByChild('voteCount')
  .on('child_added', function(snapshot){
    topSongsList.push(snapshot.val());
    console.log(snapshot.val().name, ":" , snapshot.val().voteCount)
  },function (error) {
    console.log("Error: " + error.code)
  });
  topSongsList = topSongsList.reverse();
  console.log(topSongsList)
  //add one to the vote count 
  
  //update function -upvote
  function upVote(songId){
    var voteCount;
    //retrieve the number for voteCount
    firebase.database().ref().child('songs' + '/' + songId + '/' + 'voteCount').once('value', function(snapshot){
      voteCount = snapshot.val();
    })
    //add one to the vote count of the song
    firebase.database().ref().child('songs' + '/' + songId + '/' + 'voteCount').set(voteCount+1);
  }

  //update function -upvote
  function downVote(songId){
    var voteCount;
    //retrieve the number for voteCount
    firebase.database().ref().child('songs' + '/' + songId + '/' + 'voteCount').once('value', function(snapshot){
      voteCount = snapshot.val();
    })
    //deduct one to the vote count of the song
    firebase.database().ref().child('songs' + '/' + songId + '/' + 'voteCount').set(voteCount-1);
  }

  function delSong(songId){
    firebase.database().ref().child('songs' + '/' + songId).remove();
  }
  
  //Test//////
  // delSong('1237');
  //downVote('1237');
  //upVote('1237');


// var generateRandomString = function(length) {
//   var text = '';
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };

// var stateKey = 'spotify_auth_state';
// app.use(express.static(__dirname + '/views')).use(cookieParser());
//  Endpoint to greet and add a new visitor to database.
// * Send a POST request to localhost:3000/api/visitors with body
// * {
// *   "name": "Bob"
// * }

// app.post("/api/visitors", function (request, response) {
//   var userName = request.body.name;
//   if(!mydb) {
//     console.log("No database.");
//     response.send("Hello " + userName + "!");
//     return;
//   }
//   // insert the username as a document
//   mydb.insert({ "name" : userName }, function(err, body, header) {
//     if (err) {
//       return console.log('[mydb.insert] ', err.message);
//     }
//     response.send("Hello " + userName + "! I added you to the database.");
//   });
// });

/**
 * Endpoint to get a JSON array of all the visitors in the database
 * REST API example:
 * <code>
 * GET http://localhost:3000/api/visitors
 * </code>
 *
 * Response:
 * [ "Bob", "Jane" ]
 * @return An array of all the visitor names
 */

