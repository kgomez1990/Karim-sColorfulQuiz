var time = document.getElementById('timer');
var timeRemaining = document.getElementById('timeremaining');
var timeExpired = document.getElementById('timesup');
var timeLeft = document.getElementById("timeLeft");
var startButton = document.getElementById('startButton');
var questionTile = document.getElementById('questionTile');

var buttonOne = document.getElementById('btn1');
var buttonTwo = document.getElementById('btn2');
var buttonThree = document.getElementById('btn3');
var buttonFour = document.getElementById('btn4');

var finalScore = document.getElementById('finalScore');

var initials = document.getElementById('initials');
var listHighScores = document.getElementById('listHighScores');
var viewHighScores = document.getElementById('viewHighScores');

var backButton = document.getElementById('backButton');
var clearScores = document.getElementById('clearScores');
var answeredCorrectly = 0



var quizQuestions = [
    {
        question: 'What color is the inside of a Kiwi?',
        choices:['black', 'green', 'yellow', 'orange'],
        correctAnswer: 'green'
    },
    {
        question: 'What color is an orange?',
        choices:['maroon', 'pink', 'yellow', 'orange'],
        correctAnswer: 'orange'
    },
    {
        question: 'What colors do grapes come in?',
        choices:['black/green', 'green/red', 'yellow/orange', 'orange/pink'],
        correctAnswer: 'green/red'
    },
    {
        question: 'What color is a lemon',
        choices:['black', 'violet', 'yellow', 'red'],
        correctAnswer: 'yellow'
    },
    {
        question: 'What color is a lime?',
        choices:['black', 'green', 'black', 'purple'],
        correctAnswer: 'green'
    },
    {
        question: 'What color is the inside of a grapefruit?',
        choices:['pink', 'yellow', 'red', 'orange'],
        correctAnswer: 'pink'
    },
];


function startQuiz () {
    var questionNum = 0;
    var totalTime = 90;
    time.textContent = totalTime;
    

    var startTimer = setInterval(function() {
        timeLeft.textContent = totalTime;
        totalTime--;
        if(totalTime = 0) {
            clearInterval(startTimer);
            if (questionNum < quizQuestions.length - 1) {
                gameOver();
            }
        }
    },1000);

    currentQuiz();
}

function currentQuiz () {
    currentQuestions();
}

function currentQuestions () {
    questionTile.textContent = quizQuestions[0].choices.quizQuestions;
    buttonOne.textContent = quizQuestions[0].choices[0];
    buttonTwo.textContent = quizQuestions[0].choices[1];
    buttonThree.textContent = quizQuestions[0].choices[2];
    buttonFour.textContent = quizQuestions[0].choices[3];
};

function incorrectAnswer () {
    if (quizQuestions[0].correctAnswer !== quizQuestions[0].choices[correctAnswer]) {
        totalTime -= 20;
        timeRemaining.textContent = totalTime;
    } else {
        answeredCorrectly++
    }

    if (quizQuestions.length > 0) {
        currentQuestions()
    } else {
        youLost()
    }
}

function choiceA () {
    incorrectAnswer(0);
}

function choiceB () {
    incorrectAnswer(1);
}

function choiceC () {
    incorrectAnswer(2);
}

function choiceD () {
    incorrectAnswer(3);
}


function youLost () {
    finalScore.textContent = answeredCorrectly;
}














startButton.addEventListener('click', startQuiz);