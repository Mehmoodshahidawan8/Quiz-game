const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Homer", "Chaucer", "Dickens"],
      answer: "Shakespeare",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      question: "What year did World War II end?",
      options: ["1942", "1945", "1948", "1950"],
      answer: "1945",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["HO", "H2O", "O2", "CO2"],
      answer: "H2O",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      answer: "Tokyo",
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Dollar", "Euro", "Pound", "Franc"],
      answer: "Pound",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Elements
  const startScreen = document.getElementById("start-screen");
  const quizBox = document.getElementById("quiz-box");
  const resultScreen = document.getElementById("result");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = ""; // Clear previous options
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("quiz-btn");
      button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
      optionsElement.appendChild(button);
    });
  
    nextBtn.disabled = true; // Disable Next button until an option is selected
  }
  
  function selectAnswer(button, correctAnswer) {
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach((btn) => (btn.disabled = true)); // Disable all buttons once an answer is selected
  
    if (button.innerText === correctAnswer) {
      button.style.backgroundColor = "green";
      score++;
    } else {
      button.style.backgroundColor = "red";
    }
  
    nextBtn.disabled = false; // Enable the Next button
  }
  
  function showResult() {
    quizBox.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreElement.innerText = score;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion();
  });
  
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    showQuestion();
  });
  