$("#start").on("click", function(){

})


let triviaGame = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 45,
    timerOn: false,
    timerId : '',
}  

let triviaQuestions = [ 
    {
      question1: "What is Utah's state flower?",
      answers: ["Rose", "Sunflower", "Sego lily"],
      correctAnswer: "Sego lily"
    },
    {
      question2: "What is Utah's state bird?",
      answers: ["California gull", "Bald Eagle", "Hummingbird"],
      correctAnswer:"California gull"
    },
    {
      question3: "What is Utah's state tree?",
      answers: ["Oak Tree", "Quaking Aspen", "Apple Tree"],
      correctAnswer: "Quaking Aspen"
    },
    {
      question4: "What is the capital of Utah?",
      answers: ["Provo", "Salt Lake City", "West Valley"],
      correctAnswer: "Salt Lake City",
    },
    {
      question5: "Who is Utah's governor?",
      answers: ["Gary Herbert", "Lily Williams", "John Smith"],
      correctAnswers: "Gary Herbert",
 
    }
]