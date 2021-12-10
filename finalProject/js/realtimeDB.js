// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js';
import {
  getDatabase,
  ref,
  set,
  push,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ag2_d0pNCavQCJGDV6TV9W8WCZ9ew1s",
  authDomain: "testdbvineyard.firebaseapp.com",
  databaseURL: "https://testdbvineyard-default-rtdb.firebaseio.com",
  projectId: "testdbvineyard",
  storageBucket: "testdbvineyard.appspot.com",
  messagingSenderId: "818416250548",
  appId: "1:818416250548:web:bf275c64b762c20d1bf1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// save data to DB function
const saveData = () => {
  const user = {
    email: document.getElementById('email').value,
    businessName: document.getElementById('businessName').value,
    firstName: document.getElementById('fname').value,
    lastName: document.getElementById('lname').value
  };
  writeUserData(user);
  //window.location.replace('thanks.html')

}

// eventListener on click
const button = document.getElementById('submitButton');
button.addEventListener('click', saveData);

function writeUserData(data) {
  const db = getDatabase();
  const newPostRef = push(ref(database, 'users'));
  set(newPostRef, data);
}

