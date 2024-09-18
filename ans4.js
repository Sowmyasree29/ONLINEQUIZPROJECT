const questions=[{
    question:"Which of the following is not true about views?",
    answers:[
       { text:"Can be created only from one table.",correct:"false"},
       { text:" Grouping using functions is present.",correct:"false"},
       { text:" No DML queries can be executed on the views.",correct:"true"},
       { text:"All of the above statements are true.",correct:"false"},

    ]},
    {    question:"Which of the following is true about a cursor in SQL?",
        answers:[
           { text:" It is read-only.",correct:"true"},
           { text:"The cursor can perform all the CRUD operations.",correct:"false"},
           { text:" Cursors are objects of the query.",correct:"false"},
           { text:"Cursors are created automatically.",correct:"false"},
    
        ]

    },
    {    question:"Which of the following operator is used to extract pattern matching data from the database?",
        answers:[                                                            
           { text:"LIKE",correct:"true"},
           { text:" SELECT",correct:"false"},
           { text:" FIND",correct:"false"},
           { text:" UPDATE",correct:"false"},
    
        ]

    },
    {    question:"Which of the following is true about NULL values in SQL?",
        answers:[                                                                     
            
           { text:" A NULL value means zero.",correct:"false"},
           { text:" A null value can only be used with numeric attributes.",correct:"false"},
           { text:" Null value just means that data of that attribute is not available.",correct:"true"},
           { text:" None of these.",correct:"false"},
  
        ]

    },
    {    question:"Which of the following is true about a view??",
        answers:[
           { text:" The view gets deleted automatically after the session is completed.",correct:"false"},
           { text:" Views cant be updated once created.",correct:"false"},
           { text:" Views are created by grouping a single desired attributes of a database.",correct:"true"},
           { text:" None of these.",correct:"false"},
    
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




