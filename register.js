
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

 
  const firebaseConfig = {
    apiKey: "AIzaSyBQEJc9Z2BJ3wc3KWYPMjUUuYirpAsr2MU",
    authDomain: "funspot-game.firebaseapp.com",
    projectId: "funspot-game",
    storageBucket: "funspot-game.firebasestorage.app",
    messagingSenderId: "941617410081",
    appId: "1:941617410081:web:3ac5f684bdf9c910f7b360"
  };


  const app = initializeApp(firebaseConfig);

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event){
   
  })

