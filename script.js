const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is most used programming Language in 2019?',
        a: 'java',
        b: 'c',
        c:'python',
        d:'javascript',
        correct: 'd'
    },{
        question: 'Who is the president of Us?',
        a: 'Florin pop',
        b: 'Donald trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },{
        question: 'What does HTMl stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Casacading style sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },{
        question: 'What year was javascript launched?',
        a: '1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'b'
    },
]
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text') 
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}
function getSelected() {
    let answer = undefined;

    const answersEls = document.querySelectorAll(".answer");
    
    

    answersEls.forEach((answerEl) => {
       if(answerEl.checked){
           answer =  answerEl.id;
                        
        }

       });
       return answer;
    
}
function deselectAnswer(){
    
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
                         
 
        });

}


submitBtn.addEventListener('click',() => {
    const answer = getSelected();

    
    if (answer) {
        if(answer === quizData[currentQuiz].correct) 
        {
            score++;
        }
        
            currentQuiz++;
                
    if (currentQuiz < quizData.length){
        loadQuiz();
    } else {
         quiz.innerHTML = `<h2>YOu answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
    }

        
    }
});


   

    

