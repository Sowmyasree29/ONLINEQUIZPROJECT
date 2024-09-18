const questions=[{
    question:"Who invented Java Programming?",
    answers:[
       { text:"Guido van Rossum ",correct:"true"},
       { text:" James Gosling",correct:"false"},
       { text:"Dennis Ritchie",correct:"false"},
       { text:"Bjarne Stroustrup",correct:"false"},

    ]},
    {    question:"Which component is used to compile, debug and execute the java programs?",
        answers:[
           { text:"JRE",correct:"false"},
           { text:" JIT",correct:"false"},
           { text:" JDK",correct:"true"},
           { text:"JVM",correct:"false"},
    
        ]

    },
    {    question:" Which of these cannot be used for a variable name in Java?",
        answers:[                                                            
           { text:"identifier & keyword",correct:"false"},
           { text:" identifier",correct:"false"},
           { text:" keyword",correct:"true"},
           { text:"none of the mentioned",correct:"false"},
    
        ]

    },
    {    question:"What is the extension of java code files?",
        answers:[                                                                     
            
           { text:" .js",correct:"false"},
           { text:".txt",correct:"false"},
           { text:" .class",correct:"false"},
           { text:" .java",correct:"true"},
  
        ]

    },
    {    question:"Which environment variable is used to set the java path?",
        answers:[
           { text:" MAVEN_Path",correct:"false"},
           { text:"  JavaPATH",correct:"false"},
           { text:" JAVA",correct:"false"},
           { text:" JAVA_HOME",correct:"true"},
    
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




