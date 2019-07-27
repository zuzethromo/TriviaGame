$("#start").on("click", function(){
    game.start();
  })
  
  $(document).on('click', '#end', function(){
      game.done();
  })
  
  let questions = [{
        question: "What Is Utah's State Flower?",
        answers: ["Rose", "Sunflower", "Sego Lily"],
        correctAnswer: "Sego Lily"
      },
      {
        question: "What Is Utah's State Bird?",
        answers: ["California Gull", "Bald Eagle", "Hummingbird"],
        correctAnswer:"California Gull"
      },
      {
        question: "What Is Utah's State Tree?",
        answers: ["Oak Tree", "Quaking Aspen", "Apple Tree"],
        correctAnswer: "Quaking Aspen"
      },
      {
        question: "What Is The Capital Of Utah?",
        answers: ["Provo", "Salt Lake City", "West Valley"],
        correctAnswer: "Salt Lake City",
      },
      {
        question: "Who Is Utah's Governor?",
        answers: ["Gary Herbert", "Lily Williams", "John Smith"],
        correctAnswers: "Gary Herbert",
   
  }]

  let game = {
      correct: 0,
      incorrect: 0,
      counter: 28,
      countdown: function(){
          game.counter--;
          $('#counter').html(game.counter);
          if (game.counter<=0){
              console.log("time up");
              game.done();
          }
      },
      start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subWrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(let i=0; i<questions.length; i++) {
          $("#subWrapper").append('<h2>' +questions[i].question+'</h2>');
          for(let j=0; j<questions[i].answers.length; j++) {
            $("#subWrapper").append("<input type='radio' name='question-" +i+ "' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j])
          }
        }
    
        $('#subWrapper').append('<br><button id="end">Submit</button>')

      },
      done: function(){
          $.each($("input[name='question-0']:checked"), function() {
              if($(this).val()==questions[0].correctAnswer){
                  game.correct++;
              } 
              else{
                  game.incorrect++;
              }
          });
          $.each($("input[name='question-1']:checked"), function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } 
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } 
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } 
            else{
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } 
            else{
                game.incorrect++;
            }
        });

        this.result();
      },
      result: function(){
          clearInterval(timer);
          $('#subWrapper h2').remove();

          $('#subWrapper').html("<h2>Done!</h2>");
          $('#subWrapper').append("<h3> Correct Answers: " +this.correct+"</h3>");
          $('#subWrapper').append("<h3> Incorrect Answers: " +this.incorrect+"</h3>");
          $('#subWrapper').append("<h3> Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
      }
  }