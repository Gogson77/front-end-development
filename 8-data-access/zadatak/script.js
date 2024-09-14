// URL do quiz.json fajla
const quizUrl = 'quiz.json';

// Funkcija za preuzimanje JSON podataka
async function loadQuizData() {
  try {
    const response = await fetch(quizUrl);
    const quizData = await response.json();
    return quizData;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
}

// Funkcija za generisanje kviza
function generateQuiz(quizData) {
  const quizContainer = document.getElementById('quiz');
  const quizQuestions = quizData.quiz; // Pristupamo quiz objektu

  // Iteriramo kroz svako pitanje u kvizu
  Object.keys(quizQuestions).forEach((key, index) => {
    const questionObj = quizQuestions[key];
    
    // Kreiramo div za svako pitanje
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    
    // Naslov pitanja
    const questionTitle = document.createElement('h3');
    questionTitle.innerText = `${index + 1}. ${questionObj.question}`;
    questionDiv.appendChild(questionTitle);

    // Kreiramo listu odgovora
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    questionObj.options.forEach((option, optionIndex) => {
      const optionItem = document.createElement('li');
      
      // Kreiramo radio dugme za odgovor
      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question-${index}`;
      optionInput.value = option;
      
      // Provera da li je odgovor već sačuvan u local storage
      const savedAnswer = localStorage.getItem(`question-${index}`);
      if (savedAnswer && savedAnswer === option) {
        optionInput.checked = true;
      }

      optionItem.appendChild(optionInput);
      optionItem.append(` ${option}`);
      optionsList.appendChild(optionItem);
    });

    questionDiv.appendChild(optionsList);
    quizContainer.appendChild(questionDiv);
  });
}

// Funkcija za čuvanje odgovora u Local Storage
function saveAnswers() {
  const questions = document.querySelectorAll('.question');

  questions.forEach((questionDiv, index) => {
    const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
    if (selectedOption) {
      // Čuvanje odgovora u Local Storage
      localStorage.setItem(`question-${index}`, selectedOption.value);
    }
  });

  alert('Answers saved!');
}

// Inicijalizacija kviza
document.addEventListener('DOMContentLoaded', async () => {
  const quizData = await loadQuizData();
  generateQuiz(quizData);

  // Postavljamo listener na dugme za čuvanje odgovora
  document.getElementById('saveBtn').addEventListener('click', saveAnswers);
});
