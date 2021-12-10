// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
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
  //measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const ref = db.ref('/')

document.getElementById("newBUtton").addEventListener("click", writeUserData);

function writeUserData() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var businessName = document.getElementById('businessName').value;
    console.log("writing to DB")
    //   const db = getDatabase();

    ref.set({first_name: firstName,
        last_name: lastName,
        email: email,
        business: businessName})
    // set(ref(database, 'users/' + businessName), {
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     business: businessName
    // });
    //   window.location.href = "http://www.w3schools.com";
}