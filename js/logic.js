//quiz variables
var presentChallengeIndex = 0;
var counterId;
var time = challenges.length * 10;


var challengesEl = document.getElementById(`challenges`);
var choicesEl = document.getElementById(`choices`);
var submitEl = document.getElementById(`submit-btn`);
var commenceBtn = document.getElementById("commence-btn");
var counterEl = document.getElementById('hourglass')


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
    counterId = setInterval(hourglassFunction, 1500);
    counterId.textContent = hourglass;

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
    presentChallenge.choices.forEach(function(challenge, index) {
        var challengeOption = document.createElement("button");
        challengeOption.setAttribute('class','challenge',);
        challengeOption.setAttribute('value', challenge);
        challengeOption.textContent = index + 1 + '' + challenge;
        challengeOption.onclick = challengeAnwser;
        choicesEl.appendChild(challengeOption);
    });
}


//CORRECT ANSWERS FUNCTION
function challengeAnwser() {
     // check if user guessed wrong
  if (this.value !== challenges[presentChallengeIndex].answer) {
    // subtraft counter
    time -= 1;

    if (time < 0) {
      time = 0;
    }
    // dynamically display hourglass counter
    counterEl.textContent = time;

    // was the challenge correct/wrong
    feedbackEl.textContent = "Incorrect!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // increment index to next challenge
  presentChallengeIndex++;

  // end challenge when all challenges are complete
  if (presentChallengeIndex === challenges.length) {
    endChallenge();
  } else {
    readChallenges();
  }
}

//END CHALLENGE FUNCTION
function endChallenge() {
 // end counter
 clearInterval(counterId);
 
 // render end challenge page
 var endChallengeEl = document.getElementById("end-challenge");
 endChallengeEl.removeAttribute("class");

 // display final tally
 var challengeTallyEl = document.getElementById("challenge-tally");
challengeTallyEl.textContent = time;

 // hide questions section
 challengesEl.setAttribute("class", "hide");
}

//COUNTER FUNCTION
function hourglassFunction() {  
  hourglass--;
  counterEl.textContent = hourglass;

  if (hourglass <= 0) {
    endChallenge();
  }
}

//SAVE HIGH SCORE FUNCTION
//get initials from id="user-itials"
function saveChallengeTally() {

}

// ENTER INITIALS FUNCTION
//
function initialsSubmit() {

}


commenceBtn.onclick = commenceChallenge;
submitEl.onclick = saveChallengeTally;