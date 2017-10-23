// countdown timer
var timeoutHandle;

function countdown(minutes) {

    var seconds = 60;
    var mins = minutes

    function tick() {

        var counter = document.getElementById("timer");
        var current_minutes = mins-1

        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {
            if(mins > 1){
               setTimeout(function () { countdown(mins - 1); }, 1000);
            }
        }
    }
    tick();
}
countdown(1);

// on click for submit button
$(document).ready(function() {
	$("#submit").on("click", function(e) {
		e.preventDefault();
		var numberOfQuestions = 3;
		for(var i = 0; i < numberOfQuestions; i++) {
			var selValue = $('input[name=q' +(i+1)+']:checked').val();
		}
	});
});

// code so only one option can be clicked

// right/wrong answer counter
var rightAnswers = 0;
var wrongAnswers = 0;

// // capture user input
//     document.onkeyup = function(event) {
//     	userText.textContent = (event.key);
//     var userGuess = event.key;
//   		gameElem.textContent = event.key

// // right answers


// // wrong answers


// // if the answer is right
// 	if (userGuess === true) {
// 		rightAnswers++
// 	}

// // if the answer is wrong
// 	if (userGuess === false) {
// 		wrongAnswers++
// 	}

// // once the countdown is done





