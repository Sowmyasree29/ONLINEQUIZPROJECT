const questions=[{
    question:"Who invented C++?",
    answers:[
       { text:"Dennis Ritchie",correct:"false"},
       { text:"Ken Thompson",correct:"false"},
       { text:"Brian Kernighan",correct:"false"},
       { text:"Bjarne Stroustrup",correct:"true"},

    ]},
    {    question:"Which of the following extension is used for user-defined header file in c++?",
        answers:[
           { text:"hg",correct:"false"},
           { text:"cpp",correct:"false"},
           { text:"h",correct:"true"},
           { text:"hf",correct:"false"},
    
        ]

    },
    {    question:"Which of the following is a correct identifier in C++?",
        answers:[                                                            
           { text:" VAR_1234",correct:"true"},
           { text:" $var_name",correct:"false"},
           { text:"7VARNAME ",correct:"false"},
           { text:"7var_name",correct:"false"},
    
        ]

    },
    {    question:"Which of the following approach is used by C++?",
        answers:[                                                                     
            
           { text:"Left-right",correct:"false"},
           { text:"Right-left ",correct:"false"},
           { text:"Bottom-up ",correct:"true"},
           { text:"Top-down",correct:"false"},
  
        ]

    },
    {    question:"What is virtual inheritance in C++?",
        answers:[
           { text:"C++ technique to enhance multiple inheritance",correct:"false"},
           { text:"C++ technique to ensure that a private member of the base class can be accessed somehow",correct:"false"},
           { text:"C++ technique to avoid multiple inheritances of classes",correct:"false"},
           { text:"C++ technique to avoid multiple copies of the base class into children/derived class",correct:"true"},
    
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
    
    if(currentIndex<questions.length-1)
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




