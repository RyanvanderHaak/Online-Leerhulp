// Sla de win-reeks op in local storage
const winStreak = localStorage.getItem("aryaWinStreak") || 0;

// Voeg 1 toe aan de win-reeks als de gebruiker Arya gebruikt
function updateWinStreak() {
  winStreak++;
  localStorage.setItem("aryaWinStreak", winStreak);
}

// Toon de win-reeks aan de gebruiker
function displayWinStreak() {
  const winStreakElement = document.getElementById("winStreak");
  if (winStreakElement) {
    winStreakElement.textContent = `Win streak: ${winStreak}`;
  }
}

// Update de win-reeks bij elke laadbeurt van de pagina
updateWinStreak();
displayWinStreak();

// Voeg een event listener toe om de win-reeks te updaten wanneer de gebruiker Arya gebruikt
// (bijv. wanneer ze een vraag stellen of een taak voltooien)
userInput.addEventListener("keypress", function(event) {
  // ... (jouw bestaande code)

  // Update de win-reeks
  updateWinStreak();
  displayWinStreak();
});