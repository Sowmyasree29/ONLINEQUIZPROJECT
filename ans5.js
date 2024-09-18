const questions=[{
    question:"Which of the following is the central application in the AWS portfolio??",
    answers:[
       { text:" Amazon Elastic Compute Cloud",correct:"true"},
       { text:"  Amazon Simple Queue Service",correct:"false"},
       { text:"Amazon Simple Notification Service",correct:"false"},
       { text:" Amazon Simple Storage System",correct:"false"},

    ]},
    {    question:"Point out the correct statement:",
        answers:[
           { text:" SQL Server is having enormous impact in cloud computing",correct:"false"},
           { text:"  Amazon.com’s services represent the largest pure Infrastructure as a Service (IAAS)",correct:"true"},
           { text:"  EC2 is a Platform as a Service (PaaS) market",correct:"false"},
           { text:"All of the above",correct:"false"},
    
        ]

    },
    {    question:"Which of the following is a batch processing application?",
        answers:[                                                            
           { text:" IBM sMash",correct:"false"},
           { text:"  IBM WebSphere Application Server",correct:"false"},
           { text:" Condor",correct:"true"},
           { text:"  Windows Media Server",correct:"false"},
    
        ]

    },
    {    question:"Which of the following can be done with S3 buckets through the SOAP and REST APIs?",
        answers:[                                                                     
            
           { text:"  Upload new objects to a bucket and download them",correct:"false"},
           { text:" Create, edit, or delete existing buckets",correct:"false"},
           { text:"  Specify where a bucket should be stored",correct:"false"},
           { text:" All of the mentioned ",correct:"true"},
  
        ]

    },
    {    question:"How many EC2 service zones or regions exist?",
        answers:[
           { text:" 1",correct:"false"},
           { text:" 2",correct:"false"},
           { text:" 3",correct:"false"},
           { text:" 4",correct:"true"},
    
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




