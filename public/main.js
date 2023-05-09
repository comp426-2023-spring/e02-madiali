// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

let rpslsEnabled = true;

async function playOpponent(shot) {
    var endpoint = null;
    if (rpslsEnabled) {
        endpoint = `app/rpsls/play/${shot}`;
    }
    else {
        endpoint = `app/rps/play/${shot}`
    }
    const url = document.baseURI+endpoint
    await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            document.getElementById("gameResult").innerHTML =
                `You: ${result.player} <br> <br>
                Opponent: ${result.opponent} <br> <br>
                Result: ${result.result}`;
        });
    document.getElementById("resultsDialog").classList.remove("inactive");
};

async function playNoOpponent() {
    var endpoint = null;
    if (rpslsEnabled) {
        endpoint = `app/rpsls`;
    }
    else {
        endpoint = `app/rps`
    }
    const url = document.baseURI+endpoint
    await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
            document.getElementById("gameResult").innerHTML =
                `<br> <br> ${result.player}`;
        });
    document.getElementById("resultsDialog").classList.remove("inactive");
};

async function playRps(shot) {
    const endpoint = `app/rps/play/${shot}`
    const url = document.baseURI+endpoint
    await fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
            document.getElementById("playerResult").innerHTML = `You: ${result.player}`;
            document.getElementById("opponentResult").innerHTML = `Opponent: ${result.opponent}`;
            document.getElementById("gameResult").innerHTML = `Result: ${result.result}`;
        });
    document.getElementById("resultsDialog").classList.remove("inactive");
};

function showResults() {
    document.getElementById("resultsDialog").classList.remove("inactive");
}

function hideResults() {
    document.getElementById("resultsDialog").classList.add("inactive");
}

function showRules() {
    if (rpslsEnabled) {
        document.getElementById("rulesDialogRpsls").classList.remove("inactive");
    }
    else {
        document.getElementById("rulesDialogRps").classList.remove("inactive");
    }
}

function hideRules() {
    document.getElementById("rulesDialogRps").classList.add("inactive");
    document.getElementById("rulesDialogRpsls").classList.add("inactive");
}

function toggleRpsls() {
    const rpsTitle = document.getElementById("rpsTitle");
    const rpslsTitle = document.getElementById("rpslsTitle");
    const rpsSelection = document.getElementById("rpsSelection");
    const rpslsSelection = document.getElementById("rpslsSelection");
    const toggleButton = document.querySelector("#toggleButton");

    if (rpslsEnabled) {
        rpsTitle.classList.remove("inactive");
        rpslsTitle.classList.add("inactive");
        rpsSelection.classList.remove("inactive");
        rpslsSelection.classList.add("inactive");
        toggleButton.textContent = "Switch to RPSLS";
    }

    else {
        rpsTitle.classList.add("inactive");
        rpslsTitle.classList.remove("inactive");
        rpsSelection.classList.add("inactive");
        rpslsSelection.classList.remove("inactive");
        toggleButton.textContent = "Switch to RPS";
    }

    rpslsEnabled = !rpslsEnabled;
}

const iNeedMoreCommits = "1";