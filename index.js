var hourglass = 0
var tally = 0
presentChallenge = 0

var hourglassFunction = () => {
    document.getElementById('hourglass').innerHTML = `${hourglass}`
    hourglass -= 2

    if (hourglass === 0) {
        document.getElementById(`toDa`).innerHTML = `<h3>~Our time is up!~</h3>`
    }
}
var revealTally = () => {
    document.getElementById(`tally`).innerHTML = `${tally}`
}

var challenges = [
    {
        challenge: 'What would the hex-code for black be?',
        choice: ['#FFFFFF', '#000000', '#00FF00', '0000FF'],
        truth: '#FFFFFF'
    },
    {
        challenge: 'What type of code would a Boolean be?',
        choice: ['Truthy', 'Number', 'String', 'Fooly Cooly'],
        truth: ['Truthy']
    },
    {
        challenge: 'What will the following line of code produce?: console.log("Hello" + "_" + "World")',
        choice: ['Hellow_World', 'Hello World', 'HelloWorld', 'henlofrend'],
        truth: 'Hello_World'
    }
]
var revealChallenge = () => {
    document.getElementById("challengeDiv").innerHTML = `
                <p>
                ${challenges[presentChallenge].challenge}
                </p>
                `
    document.getElementById('choicesDiv').innerHTML = `
                <p 
                class="choice"
                data-choice='${challenges[presentChallenge].choice[0]}'
                data-truth='${challenges[presentChallenge].truth}'
                >
                A.)${challenges[presentChallenge].choice[0]}
                </p>
                <p 
                class='choice'
                data-choice='${challenges[presentChallenge].choice[1]}'
                >
                B.)${challenges[presentChallenge].choice[1]}
                </p>
                <p class='choice'
                data-choice='${challenges[presentChallenge].choice[2]}'
                >
                C.)${challenges[presentChallenge].choice[2]}
                </p>
                <p class='choice'
                data-choice='${challenges[presentChallenge].choice[3]}'
                >
                D.)${challenges[presentChallenge].choice[3]}
                </p>
                `
}

var revertHourglass

document.getElementById("commence").addEventListener(`click`), event => {
    document.getElementById(`challOpt`).classList.remove(`reveal`)
    revertHourglass = setInterval(hourglassFunction, 1000)
    revealChallenge()
    revealTally()
}

document.addEventListener('click', event => {
    if (event.target.classList.contains('choice')) {
        console.log(event.target.dataset.choice)
        console.log(event.target.dataset.truth)
        if (event.target.dataset.choice === event.target.dataset.truth) {
            console.log(`Correct! [Oeuf! 0]`)
            presentChallenge += 1
            hourglass += 2
            tally += 15
            if (presentChallenge == challenges.length) {
                console.log(`well done! :D`)
                tally += 15
                revealTally()
                clearInterval(revertHourglass)
            } else {
                revealChallenge()
                revealTally()
            }
        } else {
            console.log(`Incorrect! [Emotional Damage X]`)
            hourglass -= 2
        }
    }

})
