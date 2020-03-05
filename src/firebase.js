import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDqCCiM7ng-e8aA1CbBww6AwiMPbTE_rGs',
  authDomain: 'vuex-idol.firebaseapp.com',
  databaseURL: 'https://vuex-idol.firebaseio.com',
  projectId: 'vuex-idol',
  storageBucket: 'vuex-idol.appspot.com',
  messagingSenderId: '567763519510',
  appId: '1:567763519510:web:0fd5cbd7f91833dd53cd37'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
// const storage = firebase.storage()
export {
  db
  // storage
}
