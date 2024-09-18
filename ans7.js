const questions=[{
    question:"Which one of the below mentioned is linear data structure −",
    answers:[
       { text:"Queue",correct:"false"},
       { text:"Stack",correct:"false"},
       { text:"Arrays",correct:"false"},
       { text:"All of the above",correct:"true"},

    ]},
    {    question:"Which of the following algorithm is not stable?",
        answers:[
           { text:"Bubble Sort",correct:"false"},
           { text:"Quick Sort",correct:"true"},
           { text:" Merge Sort",correct:"false"},
           { text:" Insertion Sort",correct:"false"},
    
        ]

    },
    {    question:"Which of the following is example of in-place algorithm?",
        answers:[                                                            
           { text:" Bubble Sort",correct:"false"},
           { text:" Merge Sort",correct:"true"},
           { text:" Insertion Sort",correct:"false"},
           { text:"All of the above",correct:"false"},
    
        ]

    },
    {    question:"Linked list search complexity is",
        answers:[                                                                     
            
           { text:"Ο(1)",correct:"false"},
           { text:" Ο(n)",correct:"true"},
           { text:" Ο(log n)",correct:"false"},
           { text:"Ο(log log n)",correct:"false"},
  
        ]

    },
    {    question:" In a min heap",
        answers:[
           { text:"minimum values are stored.",correct:"false"},
           { text:"child nodes have less value than parent nodes.",correct:"false"},
           { text:" parent nodes have less value than child nodes.",correct:"true"},
           { text:"maximum value is contained by the root node.",correct:"false"},
    
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




