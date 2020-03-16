// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBcxVimkFG6NWXXfSbssTNl0jjNoOkG4M8",
  authDomain: "clair-f53be.firebaseapp.com",
  databaseURL: "https://clair-f53be.firebaseio.com",
  projectId: "clair-f53be",
  storageBucket: "clair-f53be.appspot.com",
  messagingSenderId: "851092395948",
    
  clientId: "804645942676-bmpff4n2ttr0hl6b5dr9feniffrim6ad.apps.googleusercontent.com",
    
  scopes: [
    "email",
    "profile",
    "https://www.googleapis.com/auth/gmail.modify",
    "https://www.googleapis.com/auth/gmail.send"]
  };

let app = firebase.initializeApp(config);

export const db = app.firestore()
