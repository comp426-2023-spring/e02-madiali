// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('./public'))

let rpslsEnabled = true;

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

// async function playRpslsRock() {
//     const endpoint = "app/rpsls/rock"
//     const url = document.baseURI+endpoint
//     await fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
// // This processes the JSON into DOM calls that replace the existing corresponding elements in index.html 
//         .then(function(result) {
//             console.log(result);
//             document.getElementById("result").innerHTML = result.flip;
//             document.getElementById("quarter").setAttribute("src", "assets/img/"+result.flip+".png");
//         });
//     };

// var argv = minimist(process.argv.slice(2));
// const PORT = argv.port ? argv.port : 5000;

// app.get('/app', (req, res) => {
//     res.send('200 OK');
// })

// app.get('/app/rps', (req, res) => {
//     res.send(rps());
// })

// app.get('/app/rpsls', (req, res) => {
//     res.send(rpsls());
// })

// app.get('/app/rps/play', (req, res) => {
//     res.send(rps(req.query.shot));
// })

// app.get('/app/rpsls/play', (req, res) => {
//     res.send(rpsls(req.query.shot));
// })

// app.post('/app/rps/play', (req, res) => {
//     res.send(rps(req.body.shot));
// })

// app.post('/app/rpsls/play', (req, res) => {
//     res.send(rpsls(req.body.shot));
// })

// app.get('/app/rps/play/:shot', (req, res) => {
//     res.send(rps(req.params.shot));
// })

// app.get('/app/rpsls/play/:shot', (req, res) => {
//     res.send(rpsls(req.params.shot));
// })

// app.get('*', (req, res) => {
//     res.send('404 NOT FOUND');
// })

// app.listen(PORT, (err) => {
//     if (err) console.log(err);
// });