//quiz 1
const quiz1Array = [

    {
        "question": "What is 2 + 2?",
        "option1": "1",
        "option2": "5",
        "option3": "4",
        "option4": "2",

        "answer": "4"
    },
    {
        "question": "What is the capital of Canada?",
        "option1": "Toronto",
        "option2": "Montreal",
        "option3": "Vancouver",
        "option4": "Ottawa",

        "answer": "Ottawa"
    },
    {
        "question": "Which company makes the Iphone?",
        "option1": "Microsoft",
        "option2": "Apple",
        "option3": "Samsung",
        "option4": "Google",

        "answer": "Apple"
    },
    {
        "question": "Which continent is China in?",
        "option1": "North America",
        "option2": "Africa",
        "option3": "Asia",
        "option4": "Europe",

        "answer": "Asia"
    },
    {
        "question": "What is the square root of 49?",
        
        "option1": "94",
        "option2": "7",
        "option3": "4.9",
        "option4": "13",

        "answer": "7"
    },
];

//quiz 2
const quiz2Array = [

    {
        "question": "What is 10 + 10?",
        "option1": "100",
        "option2": "5",
        "option3": "20",
        "option4": "1",

        "answer": "20"
    },
    {
        "question": "What is the capital of France?",
        "option1": "Paris",
        "option2": "Rome",
        "option3": "New york",
        "option4": "London",

        "answer": "Paris"
    },
    {
        "question": "What Company sells the Big Mac?",
        "option1": "Wendy's",
        "option2": "Burger King",
        "option3": "Five guys",
        "option4": "Mcdonald's",

        "answer": "Mcdonald's"
    },
    {
        "question": "Which continent is Argentina in?",
        "option1": "South America",
        "option2": "West America",
        "option3": "North America",
        "option4": "Florida",

        "answer": "South America"
    },
    {
        "question": "What is the square root of 81?",
        
        "option1": "162",
        "option2": "8.1",
        "option3": "9",
        "option4": "27",

        "answer": "9"
    },
    {
        "question": "What is 13 in binary?",
        
        "option1": "31",
        "option2": "15",
        "option3": "1101",
        "option4": "2020",

        "answer": "1101"
    },
];


//quiz 3
const quiz3Array = [

    {
        "question": "What is 12 times 12?",
        "option1": "24",
        "option2": "144",
        "option3": "256",
        "option4": "120",

        "answer": "144"
    },
    {
        "question": "What is the capital of Japan?",
        "option1": "Beijing",
        "option2": "Moscow",
        "option3": "Tokyo",
        "option4": "Shanghai",

        "answer": "Tokyo"
    },
    {
        "question": "What Company sells the Xbox?",
        "option1": "Playstation",
        "option2": "Nintendo",
        "option3": "Epic Games",
        "option4": "Microsoft",

        "answer": "Microsoft"
    },
    {
        "question": "Which continent has the most countries?",
        "option1": "Africa",
        "option2": "Asia",
        "option3": "Europe",
        "option4": "South America",

        "answer": "Africa"
    },
    {
        "question": "What is the cube root of 64?",
        
        "option1": "8",
        "option2": "16",
        "option3": "4",
        "option4": "2",

        "answer": "4"
    },
    {
        "question": "What is 45 in binary?",
        
        "option1": "1000100",
        "option2": "101101",
        "option3": "11001110",
        "option4": "1111",

        "answer": "101101"
    },
    {
        "question": "How many players are on the field in a soccer game?",
        
        "option1": "34",
        "option2": "6",
        "option3": "22",
        "option4": "16",

        "answer": "22"
    },
];

const currentQuizText = document.getElementById('selected-quiz');
const quiz1Button = document.getElementById('quiz1-button'); // Button for Quiz 1
const quiz2Button = document.getElementById('quiz2-button'); // Button for Quiz 2
const quiz3Button = document.getElementById('quiz3-button'); // Button for Quiz 2

const questionText = document.getElementById('question-text');

const option1Button = document.getElementById('option-1-button');
const option2Button = document.getElementById('option-2-button');
const option3Button = document.getElementById('option-3-button');
const option4Button = document.getElementById('option-4-button');

const resetButton = document.getElementById('reset-button');

const questionNumberText = document.getElementById('question-number-text');
const scoreText = document.getElementById('score-text');

let currentQuiz;
let currentQuestionIndex = 0; // Initialize the current question index
let score = 0; // Initialize the score

// Function to display a question
function displayQuestion(questionIndex) {
    const currentQuestion = currentQuiz[questionIndex];
    questionText.textContent = currentQuestion.question;
    option1Button.textContent = currentQuestion.option1;
    option2Button.textContent = currentQuestion.option2;
    option3Button.textContent = currentQuestion.option3;
    option4Button.textContent = currentQuestion.option4;
    questionNumberText.textContent = `Question ${questionIndex + 1} / ${currentQuiz.length}`;
    scoreText.textContent = `Your score: ${score} / ${currentQuiz.length}`;
}

// Function to check the user's answer
function checkAnswer(selectedOption) {
    const currentQuestion = currentQuiz[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++; // Increment the score for a correct answer
    }

    currentQuestionIndex++; // Move to the next question

    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion(currentQuestionIndex); // Display the next question
    } else {
        // All questions have been answered
        // You can display a final score or perform other actions here
        alert(`Quiz completed! Your score: ${score} / ${currentQuiz.length}`);
    }

    displayQuestion(currentQuestionIndex);
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0; // Reset the current question index
    score = 0; // Reset the score to 0

    // Display the first question
    displayQuestion(currentQuestionIndex);
}

// Add event listeners to option buttons
option1Button.addEventListener('click', () => checkAnswer(option1Button.textContent));
option2Button.addEventListener('click', () => checkAnswer(option2Button.textContent));
option3Button.addEventListener('click', () => checkAnswer(option3Button.textContent));
option4Button.addEventListener('click', () => checkAnswer(option4Button.textContent));

// Add an event listener to the reset button
resetButton.addEventListener('click', resetQuiz);

quiz1Button.addEventListener('click', () => {
    currentQuiz = quiz1Array;
    currentQuizText.textContent = "Quiz 1";
    resetQuiz();
});

quiz2Button.addEventListener('click', () => {
    currentQuiz = quiz2Array;
    currentQuizText.textContent = "Quiz 2";
    resetQuiz();
});

quiz3Button.addEventListener('click', () => {
    currentQuiz = quiz3Array;
    currentQuizText.textContent = "Quiz 3";
    resetQuiz();
});

// Initialize with the first quiz
currentQuiz = quiz1Array;
currentQuizText.textContent = "Quiz 1";
displayQuestion(currentQuestionIndex);