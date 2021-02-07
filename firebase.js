import firebase from 'firebase'


const firebaseConfig = {
      apiKey: "AIzaSyB7Rh-YeR0JyufyciSjWxI42KNH6Drdgfw",
      authDomain: "signal-955dc.firebaseapp.com",
      projectId: "signal-955dc",
      storageBucket: "signal-955dc.appspot.com",
      messagingSenderId: "918807523481",
      appId: "1:918807523481:web:0ecba441adcb63d29e4808",
      measurementId: "G-BYGZ6CD0SG"
    };

let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig)
} else {
      app = firebase.apps()
}

    
const db = app.firestore()
const auth = firebase.auth()
export {db,auth};
 