function displayHighScore() {
    //getHighScore function
    document.getElementById(`tally`).innerHTML = `${tally}`
}

//callback function when page loads
displayHighScore();