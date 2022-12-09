//quiz variables
var presentChallengeIndex = 0;
var counterId;
var challengeCounter = challenges.length;


var challengesEl = document.getElementById(`challenges`);
var choicesEl = document.getElementById(`choices`);
var submitEl = document.getElementById(`submit-btn`);
var commenceBtn = document.getElementById("commence-btn");


var hourglass = 0;
var tally = 0;
var presentChallenge = 0;
var hourglassCount;
var isCorrect;
var inCorrect;

// BEGIN QUIZ FUNCTION
function commenceChallenge() {
    //hide commence challengeDiv
    var challengePageEl = document.getElementById('commence-challenge');
    challengePageEl.setAttribute('class', 'hidden')

    //show challenges
    challengesEl.removeAttribute('class');

    //start hourglass
    // counterId = setInterval(hourglassFunction, 1000);
    // counterId.textContent = hourglass;

    readChallenges();
}
//GETTING THE QUESTIONS FROM questions.js FUNCTION
function readChallenges() {
    //get challenges from array
    var presentChallenge = challenges[presentChallengeIndex];

    var challengeEl = document.getElementById('challenge-div');
    challengeEl.textContent = presentChallenge.challenge;

    choicesEl.innerHTML = "";

    //loop over challenges
    presentChallenge.challenge.forEach(function(challenge, index) {
        var challengeOption = document.createElement("button");
        challengeOption.setAttribute('class','challenge',);
        challengeOption.setAttribute('value', challenge);
        challengeOption.textContent = index + 1 + '' + challenge;
        challengeOption.onclick = setTally;
        choicesEl.appendChild(challengeOption);
    });


    //   challengesEl.innerHTML= (myChallenges[challengesIndex].challenges);
    //   allChoicesArr=(myQuestions[questionIndex].choices);
    //   for(var j=0;j< allChoicesArr.length ;j++)
    //   {
    //       answerButton = allChoicesArr[j];
    //       var answer = document.getElementById('answer' + (j + 1));

    //       answer.innerHTML = (j + 1) + '. ' + answerButton;
    //   }
}
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
// function hourglassFunction() {
//     // Sets timer
//     hourglass = setInterval(function () {
//         hourglassCount--;
//         hourglassElement.textContent = hourglassCount;
//         if (timerCount >= 0) {
//             // Tests if win condition is met
//             if (isCorrect && hourglassCount > 0) {
//                 // Clears interval and stops timer
//                 clearInterval(hourglass);
//                 endChallenge();
//             }
//         }
//         // Tests if time has run out
//         if (hourglassCount === 0) {
//             // Clears interval
//             clearInterval(hourglass);
//             endChallenge();
//         }
//         document.getElementById('hourglass').innerHTML = `${hourglass}`
//         hourglass -= 2

//         if (hourglassCount === 0) {
//             document.getElementById(`todo`).innerHTML = `<h3>~Our time is up!~</h3>`
//         }
//     }, 1000);
// };
//   OOR...
//   if (hourglassCount === 0) {
//     return;
//   }
//display highScore function

//save highScore function

commenceBtn.onclick = commenceChallenge;