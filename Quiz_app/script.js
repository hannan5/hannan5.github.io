const Quizdata = [
    {
        question: 'What is the capital of Pakistan',
        opt1:'Karachi',
        opt2:'Islamabad',
        opt3:'Lahore',
        opt4:'Quetta',
        correct:'opt2',
    },
    {
        question: 'Who is the Prime Minister of Pakistan',
        opt1:'Nawaz Sharif',
        opt2:'Bilawal Bhutto',
        opt3:'Imran Khan',
        opt4:'Zardari',
        correct:'opt3',
    },
    {
        question: 'Who is the President of US',
        opt1:'Joe Biden',
        opt2:'Donald Trump',
        opt3:'Narendar Modi',
        opt4:'Tayyab Erdugan',
        correct:'opt1',
    },
    {
        question: 'PC stands for',
        opt1:'Personal Computer',
        opt2:'Personal Cell',
        opt3:'Personal Chip',
        opt4:'Personal Chip',
        correct:'opt1',
    },
    {
        question: 'What year was JavaScript Launched',
        opt1:'2010',
        opt2:'1999',
        opt3:'1995',
        opt4:'none of the above',
        correct:'opt3',
    }

]
const opt1_text = document.getElementById('opt1_text');
const opt2_text = document.getElementById('opt2_text');
const opt3_text = document.getElementById('opt3_text');
const opt4_text = document.getElementById('opt4_text');
const btn = document.getElementById('next')
const questionh2 = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');


let currentquiz = 0;
let score = 0;

function loadquiz(){
    deselectAns();
    const currentquizData = Quizdata[currentquiz];
    // console.log(currentquizData);

    questionh2.innerText = currentquizData.question;
    opt1_text.innerText = currentquizData.opt1;
    opt2_text.innerText = currentquizData.opt2;
    opt3_text.innerText = currentquizData.opt3;
    opt4_text.innerText = currentquizData.opt4;
    // console.log(opt2_text);
}

function getselected(){

    let answer = undefined;
    answerEls.forEach((answerEl) => {
    // console.log(answerEl.checked);
    if(answerEl.checked){
        answer=  answerEl.id;
    }
    // console.log(answerEl.id);

});
return answer;
}

function deselectAns(){
    answerEls.forEach((answerEl) => {
        answerEl.checked
    }
)}



btn.addEventListener('click', () => {

const answer = getselected();
    // console.log(answer);

if(answer){
    if(answer === Quizdata[currentquiz].correct){
        score++;
    }
    currentquiz++;
    if(currentquiz < Quizdata.length){
        loadquiz();
    }
    else{
        alert('Your Quiz is Completed')
        quiz.innerHTML = `<h2> You answered correctly at ${score}/${Quizdata.length} Questions </h2>`;
    }    
}
})
loadquiz();