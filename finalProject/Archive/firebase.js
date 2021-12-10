// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js';
import {
  getDatabase,
  ref,
  set,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC2HOVWA34E08YYYQJIWXYKXGMOBgDbfJI',
  authDomain: 'test-9-4f2bd.firebaseapp.com',
  projectId: 'test-9-4f2bd',
  storageBucket: 'test-9-4f2bd.appspot.com',
  messagingSenderId: '663886791926',
  appId: '1:663886791926:web:5b658331eb0c204e29d8d7',
  measurementId: '${config.measurementId}',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const saveData = () => {
  const user = {
    email: document.getElementById('email').value,
    businessName: document.getElementById('businessName'),
    firstName: document.getElementById('fname'),
    lastName: document.getElementById('lname')
  };
  writeUserData(user);
};

// eventListener on click
const button = document.getElementById('awesomeButton');
button.addEventListener('click', saveData);

function writeUserData(data) {
  const db = getDatabase();
  set(ref(db, 'users/' + 5), data);
}
