 document.addEventListener('DOMContentLoaded', (event) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const taalmodelSelect = document.getElementById('Taalmodel');
        const aryaLM31Option = taalmodelSelect.querySelector('option[value="5"]');

        // Controleer of de gebruiker niet is ingelogd
        if (!user) {
            // Gebruiker is niet ingelogd, dus disable AryaLM3.1
            aryaLM31Option.disabled = true;
            aryaLM31Option.textContent += "(Inloggen vereist)";

            // Als AryaLM3.1 standaard geselecteerd is, verander het naar een ander model
            if (taalmodelSelect.value === '5') {
                taalmodelSelect.value = '4'; // Verander dit naar een ander standaard model
            }
        }

        // Functie om het juiste script te laden op basis van het geselecteerde model
        function loadModelScript(model) {
            const existingScript = document.getElementById('modelScript');
            if (existingScript) {
                existingScript.remove();
            }

            const script = document.createElement('script');
            script.id = 'modelScript';

            if (model == '5') {
                script.src = 'AryaLM3.1.js';
            } else if (model == '4') {
                script.src = 'AryaLM3.js';
            } else if (model == '3') {
                script.src = 'AryaLM2.1.js';
            } else if (model == '2') {
                script.src = 'AryaLM2.js';
            } else if (model == '1') {
                script.src = 'AryaLM1.js';
            }
            document.body.appendChild(script);
        }

        // Laad het juiste model script op basis van de huidige selectie
        loadModelScript(taalmodelSelect.value);

        // Event listener voor het wijzigen van de selectie van het model
        taalmodelSelect.addEventListener('change', function() {
            const selectedModel = this.value;
            if (selectedModel === '5' && !user) {
                // Selecteer een ander model (bijv. AryaLM3)
                this.value = '4';
            }
            loadModelScript(this.value);
        });
    });