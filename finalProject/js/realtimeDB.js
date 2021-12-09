// DB updates


var firstName = document.getElementById('fname').value;
var lastName = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var businessName = document.getElementById('businessName').value;


import { getDatabase, ref, set } from "firebase/database";

function writeUserData(firstName, lastName, email, businessName) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    first_name: firstName,
    last_name: lastName,
    email: email,
    business: businessName
  });
}