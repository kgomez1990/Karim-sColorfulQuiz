var time = document.getElementById('timer');
var timeRemaining = document.getElementById('timeremaining');
var timeExpired = document.getElementById('timesup');

var startButton = document.getElementById('startButton');


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
    timeRemaining.textContent = totalTime;


    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime = 0) {
            clearInterval(startTimer);
            if (questionNum < quizQuestions.length - 1) {
                gameOver();
            }
        }
    },1000);

    
}