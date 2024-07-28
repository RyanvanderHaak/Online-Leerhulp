//JavaScript to choose between a LM of Arya

document.addEventListener('DOMContentLoaded', (event) => {
  const taalmodelSelect = document.getElementById('Taalmodel');

  taalmodelSelect.addEventListener('change', function() {
      const selectedModel = this.value;
      loadModelScript(selectedModel);
  });

  function loadModelScript(model) {
      const existingScript = document.getElementById('modelScript');
      if (existingScript) {
          existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'modelScript';

      if (model == '4') {
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

  loadModelScript(taalmodelSelect.value);
});