  // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyDFhSeszWh8w9D-JNn5gAop9Auijd39Ak4",
    databaseURL: "https://musique-79bbb.firebaseio.com",
    projectId: "musique-79bbb",
    messagingSenderId: "915472544803"
  };
  firebase.initializeApp(config);

  var rootRef = firebase.database().ref();
  
  