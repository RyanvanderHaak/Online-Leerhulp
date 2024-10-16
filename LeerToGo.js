let questions = [];
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', (event) => {
  loadQuestions();
  displayQuestions();
});

function addQuestion() {
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;

  if (question && answer) {
    questions.push({ question, answer });
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
    saveQuestions();
    displayQuestions();
  }
}

function displayQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '<h3>Gemaakte Vragen</h3>';
  questions.forEach((q, index) => {
    container.innerHTML += `
        <p>${index + 1}. ${q.question} 
            <button onclick="removeQuestion(${index})">Verwijder vraag</button>
        </p>`;
  });
}

function saveQuestions() {
  localStorage.setItem('questions', JSON.stringify(questions));
}

function loadQuestions() {
  const storedQuestions = localStorage.getItem('questions');
  if (storedQuestions) {
    questions = JSON.parse(storedQuestions);
  }
}

function removeQuestion(index) {
  questions.splice(index, 1);
  saveQuestions();
  displayQuestions();
}

function startQuiz() {
  if (questions.length === 0) {
    alert('Voeg eerst een vraag toe!');
    return;
  }
  currentQuestionIndex = 0;
  document.getElementById('question-form').style.display = 'none';
  document.getElementById('questions-container').style.display = 'none';
  document.querySelector('button[onclick="startQuiz()"]').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion();
  // Focus on the answer field after showing the question
  document.getElementById('quiz-answer').focus();
}

function showQuestion() {
  const quizQuestion = document.getElementById('quiz-question');
  quizQuestion.innerText = questions[currentQuestionIndex].question;
  document.getElementById('quiz-answer').value = '';
  document.getElementById('feedback').innerText = '';
}

function checkAnswer(event) {
  if (event.keyCode === 13) {
    const userAnswer = document.getElementById('quiz-answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer.trim();
    const feedback = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.innerText = 'Correct!';
      feedback.style.color = 'green';
    } else {
      feedback.innerText = `Helaas! Het antwoord is fout. Het juiste antwoord is: "${correctAnswer}".`;
      feedback.style.color = 'red';
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion, 700);
    } else {
      feedback.innerText += ' Overhoring voltooid! Je wordt automatisch teruggestuurd naar het startmenu...';
      setTimeout(() => {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('question-form').style.display = 'block';
        document.getElementById('questions-container').style.display = 'block';
        document.querySelector('button[onclick="startQuiz()"]').style.display = 'block';
      }, 2000);
    }
  }
}
document.getElementById('quiz-answer').addEventListener('keypress', checkAnswer);