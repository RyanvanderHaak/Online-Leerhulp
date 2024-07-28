
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
recognition.onstart = function() {
    document.getElementById('status').innerText = "Luistert...";
};

recognition.onend = function() {
    document.getElementById('status').innerText = "Gestopt met luisteren.";
};

recognition.onresult = function(event) {
    const userSpeech = event.results[0][0].transcript;
    document.getElementById('userInput').value = userSpeech;
    sendMessage();
};

recognition.onerror = function(event) {
    console.error('Spraakherkenning fout:', event.error);
    document.getElementById('status').innerText = "Er is een fout opgetreden.";
};

function startListening() {
    recognition.start();
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('messages').innerHTML += `<p>Gebruiker: ${userInput}</p>`;
    

    const response = getResponse(userInput);
    document.getElementById('messages').innerHTML += `<p>Arya: ${response}</p>`;
    
}

function getResponse(input) {
    return "Dit is een antwoord van Arya!";
}