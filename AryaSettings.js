 // Open het instellingenmenu wanneer de instellingenknop wordt geklikt
 document.getElementById("settings-button").addEventListener("click", function() {
  document.getElementById("settings-menu").classList.remove("hidden");
});

// Sluit het instellingenmenu wanneer de sluitknop wordt geklikt
document.getElementById("close-settings").addEventListener("click", function() {
  document.getElementById("settings-menu").classList.add("hidden");
});

// Event listener voor de achtergrondkleur wijziging
document.getElementById('background-color').addEventListener('input', function() {
  document.body.style.backgroundColor = this.value;
});


document.getElementById('background-image').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    document.getElementById('chatContainer').style.backgroundImage = `url(${imageUrl})`;
  }
});



// Event listener voor het wissen van de chatgeschiedenis
document.getElementById('clear-history').addEventListener('click', function() {
  document.getElementById('chatMessages').innerHTML = '';
});

// Event listener voor sneltoetsen
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'Enter') {
    document.getElementById('userInput').focus();
  }
  if (event.ctrlKey && event.key === 'c') {
    document.getElementById('clear-history').click();
  }
});