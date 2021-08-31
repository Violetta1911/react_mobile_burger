import  Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0D9CpKU-Ci5x1RhhD7ZWJuzFx9jMvPJk",
  authDomain: "hot-burgers-9623c.firebaseapp.com",
  databaseURL: "https://hot-burgers-9623c-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;