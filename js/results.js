function displayHighScore() {
    var results = JSON.parse (window.localStorage.getItem("results")) || "[]";
    //getHighScore function
    results.sort(function(a, b) {
        return b.result - a.result;
    });
     for(var i = 0; i < results.length; i += 1) {
        var results = document.createElement("li");
        results.textContent = results[i].initials + " - " + results[i].result;
        var userTally = document.getElementById("final-tally");
    
        userTally.appendChild(results);
     }
}
// this file will have two functions to delete high scores
// and to display high scores
function deleteAllScores() {
    localStorage.clear(
        document.getElementById("final-tally").innerHTML = ""
    );
    window.location.reload();
}

document.getelementbyid("clear").onclick = deleteAllScores;
//callback function when page loads
displayHighScore();