// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

let rpslsEnabled = true;

function hideRules() {
    document.getElementById("rulesDialogRps").classList.add("inactive");
    document.getElementById("rulesDialogRpsls").classList.add("inactive");
}

function showRules() {
    if (rpslsEnabled) {
        document.getElementById("rulesDialogRpsls").classList.remove("inactive");
    }
    else {
        document.getElementById("rulesDialogRps").classList.remove("inactive");
    }
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