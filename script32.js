// Firebase configuratie
const firebaseConfig = {
  apiKey: "AIzaSyCFtUavU1MFFeeuu-M6zh-QK9cNDP6LNJI",
  authDomain: "online-leerhulp-account.firebaseapp.com",
  projectId: "online-leerhulp-account",
  storageBucket: "online-leerhulp-account.appspot.com",
  messagingSenderId: "24539662431",
  appId: "1:24539662431:web:2b6cd98e4d0009d38ab3ea",
  measurementId: "G-PXQ34MLSDL"
};

// Firebase initialiseren
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Registratieformulier
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Voorkomt het standaardgedrag van het formulier
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Eenvoudige validatie voor het e-mailadres en wachtwoord
  if (!email || !password) {
    alert('Vul alsjeblieft zowel e-mailadres als wachtwoord in.');
    return;
  }

  // Gebruiker registreren met Firebase Auth
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Gebruiker succesvol geregistreerd
      const user = userCredential.user;

      // Stuur verificatie e-mail
      user.sendEmailVerification()
        .then(() => {
          alert('Registratie succesvol! Controleer je e-mail voor een verificatielink.');
        })
        .catch((error) => {
          console.error('Fout bij het verzenden van de verificatie e-mail:', error);
          alert('Fout bij het verzenden van de verificatie e-mail: ' + error.message);
        });
    })
    .catch((error) => {
      // Fout bij de registratie
      console.error('Fout bij registratie:', error);
      alert('Fout bij registratie: ' + error.message);
    });
});