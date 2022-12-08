//quiz variables
var challengesIndex = 0;
var counterId;
var challengeCounter = challenges.length;


var challengesEl = document.getElementById(`challengesDiv`);
var choicesEl = document.getElementById(`choicesDiv`);
var submitEl = document.getElementById(`submit-btn`);
var commenceBtn = document.getElementById("commence-btn");

var hourglass = 0;
var tally = 0;
presentChallenge = 0;
var hourglassCount;
var isCorrect;
var inCorrect;

// BEGIN QUIZ FUNCTION
startButton.addEventListener("click", commenceBtn);
function commenceChallenge() {
    isCorrect = false;
    hourglassCount = 60;
    // Prevents commence button from being clicked when round is in progress
    commenceBtn.disabled = true;
    startHourglass()
}
//GETTING THE QUESTIONS FROM questions.js FUNCTION
var challenge = document.getElementById(`./js/questions`)
var presentChallenge = []

function setChallenge() {
    for (var i = 0; i < challenges; i++){
        presentChallenge.push("challenge")
    }
}
init();
//cORRECT ANSWERS FUNCTION

// Updates tally count on screen and sets tally count to client storage
function setTally() {
    isCorrect.textContent = tallyCounter + 10;
    localStorage.setItem("tally", tallyCounter);
  }


//END QUIZ FUNCTION
    function endChallenge() {
        wordBlank.textContent = `~Our time is up!~`;
        tally++
        commenceBtn.disabled = false;
        setTally()
      }
      if (hourglassCount === 0) {
        // Clears interval
        clearInterval(hourglass);
        endChallenge();
      }
//TIMER FUNCTION

// var hourglassFunction = () => {
//     document.getElementById('hourglass').innerHTML = `${hourglass}`
//     hourglass -= 1

//     if (hourglass === 0) {
//         document.getElementById(`todo`).innerHTML = `<h3>~Our time is up!~</h3>`
//     }
// }
// var revealTally = () => {
//     document.getElementById(`tally`).innerHTML = `${tally}`
// };
function hourglassFunction() {
    // Sets timer
    hourglass = setInterval(function () {
        hourglassCount--;
        hourglassElement.textContent = hourglassCount;
        if (timerCount >= 0) {
            // Tests if win condition is met
            if (isCorrect && hourglassCount > 0) {
                // Clears interval and stops timer
                clearInterval(hourglass);
                endChallenge();
            }
        }
        // Tests if time has run out
        if (hourglassCount === 0) {
            // Clears interval
            clearInterval(hourglass);
            endChallenge();
        }
        document.getElementById('hourglass').innerHTML = `${hourglass}`
        hourglass -= 2

        if (hourglassCount === 0) {
            document.getElementById(`todo`).innerHTML = `<h3>~Our time is up!~</h3>`
        }
    }, 1000);
};
//   OOR...
//   if (hourglassCount === 0) {
//     return;
//   }
//display highScore function

//save highScore function

beginBtn.onclick = beginQuiz;