const quizData = [
    {
        question: 'What is the capital of India?',
        a: 'Delhi',
        b: 'Bhopal',
        c: 'Panji',
        d: 'Indore',
        correct: 'a'
    },
    {
        question: 'What is the most used programming language in 2021',
        a: 'Java',
        b: 'Javascript',
        c: 'C',
        d: 'C++',
        correct: 'b'
    },
    {
        question: 'Who is the Vice-President of USA?',
        a: 'Tulsi Gabbard',
        b: 'Joe Biden',
        c: 'Kamala Harris',
        d: 'Bernie Sanders',
        correct: 'c'

    },
    {
        question: 'Who is the Prime minister of India?',
        a: 'Amit Shah',
        b: 'Narendra Modi',
        c: 'Mohan Bhagwat',
        d: 'Rahul Gandhi',
        correct: 'b'

    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'HyperTile Markup Language',
        c: 'HomeText Markup Language',
        d: 'Cascadng Style Sheet',
        correct: 'a'
    }
]
const quiz = document.querySelector('#quiz');
const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deSelect();
    questionEl.innerHTML = quizData[currentQuiz].question;
    a_text.innerHTML = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;

}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;

}
function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
    else {
       quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} question correctly<h2><button  onClick = "location.reload()">Reload</button>`
    }
}

});