// Functie om gebeurtenissen toe te voegen aan de agenda
function addEvent() {
    var eventInput = document.getElementById('eventInput').value;
    if (eventInput.trim() !== '') {
      var eventList = document.getElementById('eventList');
      var listItem = document.createElement('li');
      listItem.textContent = eventInput;
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Verwijderen';
      deleteButton.onclick = function() {
        listItem.remove(); // Verwijder de gebeurtenis uit de lijst
        saveEvents(); // Roep de functie aan om de gebeurtenissen op te slaan
      };
      listItem.appendChild(deleteButton);
      eventList.appendChild(listItem);
      saveEvents(); // Roep de functie aan om de gebeurtenissen op te slaan
      document.getElementById('eventInput').value = ''; // Wis het invoerveld
    } else {
      alert('Voer een geldige gebeurtenis in.');
    }
  }
  
  // Functie om opgeslagen gebeurtenissen te laden bij het laden van de pagina
  window.onload = function() {
    var savedEvents = localStorage.getItem('agendaEvents');
    if (savedEvents) {
      document.getElementById('eventList').innerHTML = savedEvents;
    }
  };
  
  // Functie om opgeslagen gebeurtenissen te laden
  function saveEvents() {
    var events = document.getElementById('eventList').innerHTML;
    localStorage.setItem('agendaEvents', events);
  }