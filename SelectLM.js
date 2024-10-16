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