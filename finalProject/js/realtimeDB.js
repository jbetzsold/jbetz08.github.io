// DB updates

var firstName = document.getElementById('fname').value;
var lastName = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var businessName = document.getElementById('businessName').value;


//import { getDaabase, ref, set } from "firebase/database";

function writeUserData(firstName, lastName, email, businessName) {
    console.log("writing to DB")
  const db = getDatabase();
  set(ref(db, 'users/' + businessName), {
    first_name: firstName,
    last_name: lastName,
    email: email,
    business: businessName
  });
}