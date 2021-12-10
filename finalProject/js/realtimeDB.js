// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js';
import {
  getDatabase,
  ref,
  set,
  push,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg12cVH1hTNPPp-eCEu0J2xrzWmIWyUlY",
  authDomain: "vineyard-chamber-commerce.firebaseapp.com",
  databaseURL: "https://vineyard-chamber-commerce-default-rtdb.firebaseio.com",
  projectId: "vineyard-chamber-commerce",
  storageBucket: "vineyard-chamber-commerce.appspot.com",
  messagingSenderId: "871628535447",
  appId: "1:871628535447:web:b51e9a2038716295b6dbd2",
  measurementId: "${config.measurementId}"
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
  window.location.replace('thanks.html')

}

// eventListener on click
const button = document.getElementById('submitButton');
button.addEventListener('click', saveData);

function writeUserData(data) {
  const db = getDatabase();
  const newPostRef = push(ref(db, 'users/' + 5));
  set(newPostRef, data);
}

