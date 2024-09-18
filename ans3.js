const questions=[{
    question:"Which of the following command is used to create react-js-app ?",
    answers:[
       { text:"npx create-react-app appname",correct:"true"},
       { text:"npm install create-react-app",correct:"false"},
       { text:"npx install create-react-app -g",correct:"false"},
       { text:"install - l create-react-app",correct:"false"},

    ]},
    {    question:"In React.js which one of the following is used to create a class for Inheritance ?",
        answers:[
           { text:"create",correct:"false"},
           { text:"Extends",correct:"true"},
           { text:"Inherits",correct:"false"},
           { text:"Delete",correct:"false"},
    
        ]

    },
    {    question:"What is the default port number in which the application run ??",
        answers:[                                                            
           { text:"3000",correct:"true"},
           { text:"8080",correct:"false"},
           { text:"5000",correct:"false"},
           { text:"3030",correct:"false"},
    
        ]

    },
    {    question:"Which of the following valid component return type of React ??",
        answers:[                                                                     
            
           { text:"2",correct:"false"},
           { text:"5",correct:"false"},
           { text:"1",correct:"true"},
           { text:"3",correct:"false"},
  
        ]

    },
    {    question:"Which of the following is a way to handle data in React.js ?",
        answers:[
           { text:"State & Props",correct:"true"},
           { text:"Services & Components",correct:"false"},
           { text:"State & Services",correct:"false"},
           { text:"State & Component",correct:"false"},
    
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




