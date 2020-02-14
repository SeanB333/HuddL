$(document).ready(function () {
    // add firebase

    const firebaseConfig = {
        apiKey: "AIzaSyAImTWmxk_JyDqWv1hbErwC6-KS2JIOllk",
        authDomain: "ppmeeting-d1a81.firebaseapp.com",
        databaseURL: "https://ppmeeting-d1a81.firebaseio.com",
        projectId: "ppmeeting-d1a81",
        storageBucket: "ppmeeting-d1a81.appspot.com",
        messagingSenderId: "423558053294",
        appId: "1:423558053294:web:3160ec91b2530f8c649c3f",
        measurementId: "G-DV6FH8MJ96"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    $("#login").on("click", e => {
        const email = $("#email").val();
        const password = $("#password").val();
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(){
            window.location.href="./dashboard.html"
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert("signed in")
          });
    });

    $("#logout").on("click", e => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            console.log(firebaseUser.email)
           
        } else {
            console.log("logged off")
        }
    })

});