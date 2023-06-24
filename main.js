// setting

const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyDKPQBjeCDeAnIRJ5rx2EcXnCYX9i6xEzg",
authDomain: "auth-form-fae4c.firebaseapp.com",
projectId: "auth-form-fae4c",
storageBucket: "auth-form-fae4c.appspot.com",
messagingSenderId: "746299539163",
appId: "1:746299539163:web:0e3d9508be3ca222a7d6fe",
measurementId: "G-RFDRDBKMWV" });


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed up
      document.write("You are signed up");
      console.log(result);
      // Redirect to a new page
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

// sign in function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are signed in");
      console.log(result);
      // Redirect to a new page
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

////////////////////////////////////////////////////

// Initialize Firebase app
var firebaseConfig = {

  apiKey: "AIzaSyDKPQBjeCDeAnIRJ5rx2EcXnCYX9i6xEzg",
authDomain: "auth-form-fae4c.firebaseapp.com",
projectId: "auth-form-fae4c",
storageBucket: "auth-form-fae4c.appspot.com",
messagingSenderId: "746299539163",
appId: "1:746299539163:web:0e3d9508be3ca222a7d6fe",
measurementId: "G-RFDRDBKMWV" };


firebase.initializeApp(firebaseConfig);

// Get a reference to the database
var database = firebase.database();


