import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAAP6OzcyVMskAXmRLzoO8-giNQn0zzUwo",
  authDomain: "wi-ly-app.firebaseapp.com",
  databaseURL: "https://wi-ly-app.firebaseio.com",
  projectId: "wi-ly-app",
  storageBucket: "wi-ly-app.appspot.com",
  messagingSenderId: "399243432814",
  appId: "1:399243432814:web:7c7307d6cd06d38cb1e77f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();