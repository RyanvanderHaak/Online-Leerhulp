document.getElementById('showPassword').addEventListener('change', function() {
  var passwordField = document.getElementById('password');
  if (this.checked) {
      passwordField.type = 'text';
  } else {
      passwordField.type = 'password';
  }
});

 // script31.js

const firebaseConfig = {
    apiKey: "AIzaSyCFtUavU1MFFeeuu-M6zh-QK9cNDP6LNJI",
    authDomain: "online-leerhulp-account.firebaseapp.com",
    projectId: "online-leerhulp-account",
    storageBucket: "online-leerhulp-account.appspot.com",
    messagingSenderId: "24539662431",
    appId: "1:24539662431:web:2b6cd98e4d0009d38ab3ea",
    measurementId: "G-PXQ34MLSDL"
};

// Initialiseer Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Gebruiker inloggen met Firebase Auth
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Gebruiker succesvol ingelogd
              const user = userCredential.user;
              console.log('Gebruiker ingelogd:', user);
              // Sla gebruikersgegevens op in de lokale opslag
              localStorage.setItem('user', JSON.stringify(user));
              alert('Inloggen succesvol!');
              // Doorsturen naar een andere pagina bij succesvol inloggen
              if (user) {
                alert('Je bent nu ingelogd! Geniet van de extra voordelen! Klik op "OK" en je wordt automatisch doorgestuurd!')
                window.location.href="Welkom.html"
              }
          })
          .catch((error) => {
              console.error('Fout bij inloggen:', error);
              alert('Fout bij inloggen: ' + error.message);
          });
  });

  window.onload = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
          alert= "Je bent al ingelogd! Geniet van de extra voordelen!";
      }
  };