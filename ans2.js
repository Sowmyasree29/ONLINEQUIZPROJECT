const questions=[{
    question:" Which of the following is correct about features of JavaScript?",
    answers:[
       { text:"JavaScript is is complementary to and integrated with HTML.",correct:"false"},
       { text:"JavaScript is open and cross-platform.",correct:"false"},
       { text:"Both of the above.",correct:"true"},
       { text:"All of the above.",correct:"false"},

    ]},
    {    question:"Where is the correct place to insert a JavaScript?",
        answers:[
           { text:"Both the head section and the body section are correct",correct:"true"},
           { text:"The head section",correct:"false"},
           { text:"The body section",correct:"false"},
           { text:"None of the above",correct:"false"},
    
        ]

    },
    {    question:"Is it necessary for the external script file to contain a <script> tag?",
        answers:[                                                            
           { text:"yes",correct:"false"},
           { text:"No",correct:"true"},
           { text:"Depends on the type of include",correct:"false"},
           { text:"None of the above",correct:"false"},
    
        ]

    },
    {    question:"How many ways are there with which we can declare a variable in javascript?",
        answers:[                                                                     
            
           { text:"Only one",correct:"false"},
           { text:"Three",correct:"true"},
           { text:"Infinitely many",correct:"false"},
           { text:"None of the above",correct:"false"},
  
        ]

    },
    {    question:"Which of the following represent truthy values in javascript",
        answers:[
           { text:"true",correct:"true"},
           { text:"{}",correct:"false"},
           { text:"[]",correct:"false"},
           { text:"All of the above",correct:"false"},
    
        ]

    },

]
 


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




