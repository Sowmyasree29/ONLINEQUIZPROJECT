const questions=[{
    question:"Which of these is a standard interface for serial data transmission?",
    answers:[
       { text:"ASCII",correct:"false"},
       { text:"RS232C",correct:"true"},
       { text:"2",correct:"false"},
       { text:"Centronics",correct:"false"},

    ]},
    {    question:"Which of the following transmission directions listed is not a legitimate channel?",
        answers:[
           { text:"simplex",correct:"false"},
           { text:"half duplex",correct:"false"},
           { text:"full duplex",correct:"false"},
           { text:"double duplex",correct:"true"},
    
        ]

    },
    {    question:"A collection of hyperlinked documents on the internet forms the ?",
        answers:[                                                            
           { text:" World Wide Web (WWW)",correct:"true"},
           { text:" E-mail system",correct:"false"},
           { text:"  Mailing list",correct:"false"},
           { text:"Hyper Text Markup lang",correct:"false"},
    
        ]

    },
    {    question:"Parity bits are used for which of the following purposes?",
        answers:[                                                                     
            
           { text:"Encryption of data",correct:"false"},
           { text:" To transmit faster",correct:"false"},
           { text:"To detect errors",correct:"true"},
           { text:"  To identify the user",correct:"false"},
    
        ]

    },
    {    question:"The location of a resource on the internet is given by its?",
        answers:[
           { text:"Protocol",correct:"false"},
           { text:" URL",correct:"true"},
           { text:" E-mail address",correct:"false"},
           { text:" ICQ",correct:"false"},
    
        ]

    },

]
// 


let currentIndex = 0;
let score=0;

const mainque = document.getElementById('mainque');
const answersButton = document.getElementById('answersButton');
const next = document.getElementById('next');

function showquestion() {
    resetstate();
    let currentquestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    mainque.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetstate() {
    next.style.display = "none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
   
    
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButton.children).forEach(button=>
    {
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct")
        }
        button.disabled=true;
    }
    )
    next.style.display="block";
    
    
}
function handleNextButton()
{
   currentIndex++;
   if(currentIndex<questions.length)
   {
    showquestion();
   }
}
function start()
{
    currentIndex=0;
    score=0;
    answersButton.display="block";
    showScore.innerHTML=" "
   
    showquestion();
}
next.addEventListener("click",()=>{
    if(currentIndex<questions.length)
    {
      handleNextButton();
    }
    else{
        let showScore=document.getElementById("showScore")
        showScore.innerHTML=`Your score is ${score}.`;
        next.innerHTML="start"
       
        if(score<3)
          showScore.style.color="red";
        else{
            showScore.style.color="green";
        }
          answersButton.style.display="hidden";
          next.addEventListener("click",start)
          
    }
})
showquestion();

// // document.addEventListener('DOMContentLoaded', (event) => {
//     showquestion();
// });



