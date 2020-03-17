var questions = $("#question-text")
var startbutton = $("#start-button")
var buttondiv = $("#buttondiv")
function startQuiz()
{ 
startbutton.remove();
questions.text("Question 1: How many woods did the wood chuck chuck when the wood chuck chuck some wood?")

}




$("#start-button").on("click",function(){
    startQuiz()
   
})
3