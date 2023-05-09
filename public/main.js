// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

let rpsEnabled = true;

function showRules() {
    
}

function toggleRpsls() {
    const rpsTitle = document.getElementById("rpsTitle");
    const rpslsTitle = document.getElementById("rpslsTitle");
    const rpsSelection = document.getElementById("rpsSelection");
    const rpslsSelection = document.getElementById("rpslsSelection");
    const toggleButton = document.querySelector("#toggleButton");

    if (rpsTitle.classList.contains("active")) {
        rpsTitle.classList.remove("active");
        rpsTitle.classList.add("inactive");
        rpslsTitle.classList.remove("inactive");
        rpslsTitle.classList.add("active");
        rpsSelection.classList.remove("active");
        rpsSelection.classList.add("inactive");
        rpslsSelection.classList.remove("inactive");
        rpslsSelection.classList.add("active");
        toggleButton.textContent = "Switch to RPS";
    }

    else {
        rpsTitle.classList.add("active");
        rpsTitle.classList.remove("inactive");
        rpslsTitle.classList.add("inactive");
        rpslsTitle.classList.remove("active");
        rpsSelection.classList.add("active");
        rpsSelection.classList.remove("inactive");
        rpslsSelection.classList.add("inactive");
        rpslsSelection.classList.remove("active");
        toggleButton.textContent = "Switch to RPSLS";
    }

    rpsEnabled = !rpsEnabled;
}