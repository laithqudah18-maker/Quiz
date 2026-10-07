const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"],
    correctAnswer: 1
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    correctAnswer: 2
  },
  {
    question: "Which symbol is used for CSS class selectors?",
    options: ["#", ".", "*", "&"],
    correctAnswer: 1
  },
  {
    question: "who is the best enginner in world?",
    options: ["elon masl","mark","john","laith"],
    correctAnswer: 3


  },
];
let currentQuestion=0;
let score=0;
document.querySelector("#restart").style.display = "block";
document.querySelector("#restart").addEventListener("click", function() {
    location.reload();
});
document.querySelector("#question").textContent = questions[0].question;
const questionsDiv=document.querySelector(".options");
questions[currentQuestion].options.forEach(function(optionText, index) {
   const newBtn = document.createElement("button");
   newBtn.textContent = optionText;
   questionsDiv.appendChild(newBtn);

   newBtn.addEventListener("click", function() {
       if (index === questions[currentQuestion].correctAnswer) {
        score++;
           alert("Correct!");
           
       } else {
           alert("Wrong!");
       }
   });
});


const nextBtn=document.querySelector("#next");
nextBtn.addEventListener("click", function(){
       currentQuestion++;

   if (currentQuestion >= questions.length) {
    document.querySelector("#question").textContent = "";
    questionsDiv.innerHTML = "";
    document.querySelector("#result").textContent = "You got " + score + " out of " + questions.length;
    return;
}
    
   
   document.querySelector("#question").textContent = questions[currentQuestion].question;
   
   questionsDiv.innerHTML = "";
   
   questions[currentQuestion].options.forEach(function(optionText, index) {
       const newBtn = document.createElement("button");
       newBtn.textContent = optionText;
       questionsDiv.appendChild(newBtn);

       newBtn.addEventListener("click", function() {
           if (index === questions[currentQuestion].correctAnswer) {
            score++;
                           alert("correct!");

              
               
           } else {
               alert("Wrong!");
           }
       });
   });
});
    


