let questions = [


    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Berners Lee",
        "answer_3": "Lady Gaga",
        "answer_4": "Justin Bieber",
        "right_answer": 2


    },

    {
        "question": "In welchen Jahr begann der 1. Weltkrieg",
        "answer_1": "1914",
        "answer_2": "1918",
        "answer_3": "1939",
        "answer_4": "1945",
        "right_answer": 1


    },

    {
        "question": "Wer hat Wetten dass..? erfunden",
        "answer_1": "Angela Merkel",
        "answer_2": "Thomas Gottschalk",
        "answer_3": "Frank Elsner",
        "answer_4": "Pumuckl",
        "right_answer": 3


    },

    {
        "question": "Was ist die Hauptstadt von Deutschland",
        "answer_1": "Bonn",
        "answer_2": "Berlin",
        "answer_3": "Hong Kong",
        "answer_4": "New York",
        "right_answer": 2


    },

    {
        "question": "Welcher Hersteller verkauft das Iphone",
        "answer_1": "Apple",
        "answer_2": "Microsoft",
        "answer_3": "Starbucks",
        "answer_4": "Tchibo",
        "right_answer": 1


    }

];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL= new Audio('audio/fail.mp3');

function init() {

    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();

}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {

        document.getElementById('endScreen').style = '';
        document.getElementById('questionbody').style = 'display: none';

        document.getElementById('amountOfquestions').innerHTML = questions.length;
        document.getElementById('amount-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/first.jpg';
    } else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%; %`;



        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];

        document.getElementById('answer_2').innerHTML = question['answer_2'];

        document.getElementById('answer_3').innerHTML = question['answer_3'];

        document.getElementById('answer_4').innerHTML = question['answer_4'];


    }
}











function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfrightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        AUDIO_SUCCESS.play();

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfrightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();


    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {

    currentQuestion++;

    document.getElementById('next-button').disabled = true;
    resetAnswerbutton();
    showQuestion();

}
function resetAnswerbutton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {


    document.getElementById('header-image').src = 'img/qzuiz.png';
    document.getElementById('questionbody').style = '';
    document.getElementById('endScreen').style = 'display: none';
    currentQuestion = 0;
    rightQuestions = 0;
    init();


}


