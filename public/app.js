  (function(){
    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDFhSeszWh8w9D-JNn5gAop9Auijd39Ak4",
      authDomain: "musique-79bbb.firebaseapp.com",
      databaseURL: "https://musique-79bbb.firebaseio.com",
      projectId: "musique-79bbb",
      storageBucket: "",
      messagingSenderId: "915472544803"
    };
    firebase.initializeApp(config);
  
    var rootRef = firebase.database().ref();
  
    //get element
    const preObject = document.getElementById('object');
  
    //create references
    const dbRefObject = firebase.database().ref().child('object');
  
    //sync object changes
    dbRefObject.on('value', snap => console.log(snap.val()));
  
  
  }());
  
  