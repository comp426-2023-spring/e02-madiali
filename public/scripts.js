// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

const rpsTitle = document.getElementById("rpsTitle");
const rpslsTitle = document.getElementById("rpslsTitle");
const rpsSelection = document.getElementById("rpsSelection");
const rpslsSelection = document.getElementById("rpslsSelection");

function toggleRpsls() {
    rpsTitle.classList.toggle("active");
    rpsTitle.classList.toggle("inactie");
    rpslsTitle.classList.toggle("active");
    rpslsTitle.classList.toggle("inactive");
    rpsSelection.classList.toggle("active");
    rpsSelection.classList.toggle("inactive");
    rpslsSelection.classList.toggle("active");
    rpslsSelection.classList.toggle("inactive");
}