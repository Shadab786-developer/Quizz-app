document.addEventListener("DOMContentLoaded", () => {
  let startBtn = document.getElementById("start-btn");
  let nextBtn = document.getElementById("next-btn");
  let restartBtn = document.getElementById("restart-btn");
  let questionContainer = document.getElementById("question-container");
  let questionText = document.getElementById("question-text");
  let choiceList = document.getElementById("choice-list");
  let resultContainer = document.getElementById("result-container");
  let scoreDisplay = document.getElementById("score");
  let marksDisplay = document.getElementById("marks");

  const questions = [
    {
      question: "what is the capital of France ?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 5,
    },
    {
      question: "which planet is known as the Red planet ?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 5,
    },
    {
      question: "who wrote 'Hamlet' ?",
      choices: [
        "Charles Dickens",
        "Jame Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 5,
    },
  ];

  let curentQuestionIndex = 0;
  let score = 0;
  let marks = 0;
  let totalMarks = questions.length;

  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    curentQuestionIndex++;
    if (curentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  restartBtn.addEventListener("click", () => {
    curentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    showQuestion();
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hide");
    resultContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add("hide");
    questionText.innerHTML = `<div class="text-[30px] text-wrap font-bold ml-3 mr-3">${questions[curentQuestionIndex].question}</div>`;
    choiceList.innerHTML = ""; //clear previous choices
    questions[curentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerHTML = `
      ${choice}
      `;
      // li.textContent = choice;
      li.classList.add("li-element");
      li.addEventListener("click", () => {
        const correctAnswer = questions[curentQuestionIndex].answer;
        // const li = document.getElementsByTagName(li);
        if (choice === correctAnswer) {
          score++;
          marks++;
          nextBtn.classList.remove("hide");
          li.classList.add("li-right");
        } else {
          nextBtn.classList.remove("hide");
          li.classList.add("li-wrong");
        }
      });
      choiceList.appendChild(li);
    });
  }

  // // function {
  // //   const correctAnswer = questions[curentQuestionIndex].answer;

  // //   if (choice === correctAnswer) {
  // //     score++;
  // //     marks++;
  // //     nextBtn.classList.remove("hide");
  // //   } else {
  // //     nextBtn.classList.remove("hide");
  // //     li.classList.add("red-property");
  // //   }
  // }
  function showResult() {
    questionContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
    marksDisplay.textContent = `${marks} out of ${totalMarks}`;
  }
});
