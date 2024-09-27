document.addEventListener('DOMContentLoaded', (event) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const taalmodelSelect = document.getElementById('Taalmodel');
    const modelOptions = taalmodelSelect.querySelectorAll('option');

    if (!user) {
        modelOptions.forEach(option => {
            option.disabled = true;
            option.textContent += " (Inloggen vereist)";
        });
        
        taalmodelSelect.value = '0';
    }

    // Functie om het juiste script te laden op basis van het geselecteerde model
    function loadModelScript(model) {
        const existingScript = document.getElementById('modelScript');
        if (existingScript) {
            existingScript.remove();
        }

        const script = document.createElement('script');
        script.id = 'modelScript';

        switch (model) {
            case '6':
                script.src = 'AryaLM3.2.js';
                break;
            case '5':
                script.src = 'AryaLM3.1.js';
                break;
            case '4':
                script.src = 'AryaLM3.js';
                break;
            case '3':
                script.src = 'AryaLM2.1.js';
                break;
            case '2':
                script.src = 'AryaLM2.js';
                break;
            case '1':
                script.src = 'AryaLM1.js';
                break;
        }
        document.body.appendChild(script);
    }

    loadModelScript(taalmodelSelect.value);

    taalmodelSelect.addEventListener('change', function () {
        const selectedModel = this.value;
        if (selectedModel === '6' && !user) {
            this.value = '0';
        }
        loadModelScript(this.value);
    });
});




//Controleer op account-status
function initArya() {
    // Jouw bestaande initialisatiecode voor Arya hier

    // Functie om de gebruikersstatus te controleren
    function checkUserStatus() {
        const userId = localStorage.getItem('user');
        if (userId) {
            firebase.database().ref(`users/${userId}`).once('value').then(snapshot => {
                const userData = snapshot.val();
                if (userData && userData.status !== 'active') {
                    localStorage.removeItem('user');
                    alert('We hebben een ongewenste activiteit op je account gedetecteerd. Je account is geblokkeerd en kunt momenteel niet meer inloggen. Probeer het later opnieuw.');
                    window.location.href = 'Inloggen.html'; // Stuur de gebruiker naar de inlogpagina
                }
            });
        }
    }

    // Stel de functie in om elke 5 minuten te draaien
    setInterval(checkUserStatus, 300000); // 300000 ms = 5 minuten

    // Hier kun je de rest van je Arya-initiatiescript aanroepen
}

// Roep initArya aan wanneer de pagina laadt
window.onload = initArya;