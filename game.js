(function() {
  const myQuestions = [{
      question: "What is the surname given to bastards born in Dorne?",
      answers: {
        a: "Rivers",
        b: "Sand",
        c: "Waters",
        d: "Stone"
      },
      correctAnswer: "b"
    },
    {
      question: "'The Mountain' is the nickname for which character?",
      answers: {
        a: "Oberyn Martell",
        b: "Sandor Clegane",
        c: "Gregor Clegane",
        d: "Gerold Clegane"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
      answers: {
        a: "Ser Jamie Lannister",
        b: "Ser Jeor Mormont",
        c: "Ser Loras Tyrell",
        d: "Ser Barristan Selmy"
      },
      correctAnswer: "d"
    },
    {
      question: "Who was Margaery Tyrell's first husband?",
      answers: {
        a: "Renly Baratheon",
        b: "Tommen Baratheon",
        c: "Joffrey Baratheon",
        d: "Stannis Baratheon"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is known as 'The-King-Beyond-the-Wall?'",
      answers: {
        a: "Stannis Baratheon",
        b: "Tormund",
        c: "The Night King",
        d: "Mance Rayder"
      },
      correctAnswer: "d"
    },
    {
      question: "How many times has Sansa Stark been married?",
      answers: {
        a: "Once",
        b: "Twice",
        c: "Three times",
        d: "None"
      },
      correctAnswer: "b"
    },
    {
      question: "Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",
      answers: {
        a: "Aeron Greyjoy",
        b: "Yara Greyjoy",
        c: "Balon Greyjoy",
        d: "Euron Greyjoy"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the Mad King's firstborn son?",
      answers: {
        a: "Rhaegar Targaryen",
        b: "Viserys Targaryen",
        c: "Aegon Targaryen",
        d: "Aemon Targaryen"
      },
      correctAnswer: "a"
    },
    {
      question: "Grey Worm and Missandei became allies of Daenerys Targaryen after she liberated the slaves of which city?",
      answers: {
        a: "Yunkai",
        b: "Astapor",
        c: "Meereen",
        d: "Qarth"
      },
      correctAnswer: "b"
    },
    {
      question: "Who delivered the fatal blow to the King-in-the North, Robb Stark?",
      answers: {
        a: "Alliser Thorne",
        b: "Walder Frey",
        c: "Roose Bolton",
        d: "Black Walder Frey"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the name of the royal executioner who beheaded Eddard Stark for treason?",
      answers: {
        a: "Ser Ilyn Payne",
        b: "Ser Beric Dondarrion",
        c: "Ser Meryn Trant",
        d: "Ser Janos Slynt"
      },
      correctAnswer: "a"
    },
    {
      question: "Which rival king attempted to take King's Landing during the Battle of the Blackwater?",
      answers: {
        a: "Stannis Baratheon",
        b: "Robb Stark",
        c: "Renly Baratheon",
        d: "Balon Greyjoy"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was the fool who helped Sansa Stark escape King's Landing after King Joffrey's death?",
      answers: {
        a: "Petyr Baelish",
        b: "Olenna Tyrell",
        c: "Eddison Tollett",
        d: "Dontos Hollard"
      },
      correctAnswer: "d"
    },
    {
      question: "Which city does Samwell Tarly travel to in order to train as a maester?",
      answers: {
        a: "Sunspear",
        b: "Oldtown",
        c: "Highgarden",
        d: "Gulltown"
      },
      correctAnswer: "b"
    },
    {
      question: "The wildling Gilly has a son, who is the father?",
      answers: {
        a: "Tormund Giantsbane",
        b: "Jeor Mormont",
        c: "Craster",
        d: "Samwell Tarly"
      },
      correctAnswer: "c"
    },
    {
      question: "In which city does Arya Stark train to become a Faceless Man?",
      answers: {
        a: "Pentos",
        b: "Astapor",
        c: "Braavos",
        d: "Meereen"
      },
      correctAnswer: "c"
    },
    {
      question: "Thoros of Myr is responsible for reviving which character from the dead?",
      answers: {
        a: "Sandor Clegane",
        b: "Gregor Clegane",
        c: "Jon Snow",
        d: "Beric Dondarrion"
      },
      correctAnswer: "d"
    },
    {
      question: "In Season 4, who does Tywin Lannister plan to marry his daughter, Cersei to?",
      answers: {
        a: "Loras Tyrell",
        b: "Euron Greyjoy",
        c: "Oberyn Martell",
        d: "None"
      },
      correctAnswer: "a"
    },
    {
      question: "Davos Seaworth grew up in the slums of which city?",
      answers: {
        a: "Lannisport",
        b: "Gulltown",
        c: "King's Landing",
        d: "Oldtown"
      },
      correctAnswer: "c"
    },
    {
      question: "What relation is Lyanna Mormont to Jorah Mormont?",
      answers: {
        a: "Niece",
        b: "Cousin",
        c: "Daughter",
        d: "Sister"
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    // keep track of user's answers
    let numCorrect = 0;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
    questionCounter++
    questionCounterText.innerHTML = questionCounter + "/" + myQuestions.length;
    progressBarFull.style.width = `${(questionCounter/myQuestions.length) * 100}%`;
  }
  let questionCounter = 1;

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
    questionCounter--;
    questionCounterText.innerHTML = questionCounter + "/" + myQuestions.length;
    progressBarFull.style.width = `${(questionCounter/myQuestions.length) * 100}%`;
  };
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  // display quiz right away
  buildQuiz();
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  showSlide(0);
  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  const questionCounterText = document.getElementById('questionCounter');
})();
