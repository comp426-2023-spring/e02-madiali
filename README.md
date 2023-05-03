[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/d83Ec2gW)
# COMP 426 Final Exam

This repo contains the starter code for the final exam for COMP 426.

The purpose of this exam is to help you pull together your backend API server from a04 with a frontend interface written in HTMl+CSs+JS meant to be run in the browser. 

# STOP and read this very carefully

Before continuing any further, please note the following:

This exam has two parts. 

1. The first is a questionnaire that you should have received via an email link. If you did not, the link is also here: https://unc.az1.qualtrics.com/jfe/form/SV_cImKRp21KDuVxeC

2. The second is structured just like all the other assignments.

You MUST not clone this repository directly.

Follow this link to create your own personalized version of the exam repository: https://classroom.github.com/a/d83Ec2gW

_Nota bene:_

The autograder will NOT be online immediately.
You need to take a few days to try to make this work on your own first.
You can definitely do it.

## Requirements

1. You will integrate your API server into the framework provided in this repository. 
2. You will add an HTML+CSS+JS front end to allow a user to play a game of either Rock-Paper-Scissors (RPS) or Rock-Paper-Scissors-Lizard-Spock (RPSLS) in the browser/client interface. 
3. All HTML and CSS must validate. Use these online validators to check your markup (HTML: https://validator.w3.org/#validate_by_upload and CSS: https://jigsaw.w3.org/css-validator/#validate_by_upload).
4. User requirements:
    1. User must be able to select whether they are playing RPS or RPSLS in the interface.
    2. User must be able to select whether they want to request a random draw OR whether they want to play an opponent. 
    3. If user is playing an opponent, they must be able to select what they want to play (e.g. play paper or play lizard).
    4. Include a reset or start over button to reset choices or play again at the end of the game.
    5. Be creative in the way you present these options to your user. You can use dropdown menus, radio buttons, buttons, etc. Whatever makes the most sense to you: use it. There are also icon images in `./public/img/` that you can use if you wish.
5. Include a link somewhere on your page to the rules for RPS and RPSLS. (You should still have this from a previous assignment.
6. Add a `docs` directory to your repository and include screenshots of your interface before play (interface) and after play (results). Name the screenshots `01-interface` and `02-result` with the appropriate file extension ( e.g. `.png` or `.jpg`, etc.).

## First steps

1. To serve files for the interface, put them in the `./public` directory and run the server. 
2. In the `index.html` file, put links in the `<head>` section to the `scripts.js` (https://www.w3schools.com/tags/att_script_src.asp) and `styles.css` (https://www.w3schools.com/css/css_howto.asp) files.
3. Put your browser-side JavaScript code in the `scripts.js` 
4. Put any CSS in the `styles.css` file.

## Frontend functions

You will need a few functions to make this work. Here are some examples:

1. A function that uses fetch() to send a call to the correct endpoint of your API server based on input parameters (should be the same address with `/app/` appended after the base URL and then whatever route for a particular endpoint). 
2. A function that uses fetch to send a play call with an opponent and one without. 
3. A function that uses fetch to send a play call for RPS or RPSLS, depending on what the user selects.
4. A function to clear all the selections and reset the interface (or reload the page).

## Backend integration

You will need to add your endpoint definitions and other relevant code from a04 to this starter code to make your API function and serve on the same address as your frontend.

Your default endpoint for the API should be `/app/`.

Everything else should follow from the requirements for a04 for endpoints, depending on what you need for the frontend.

## Running the server for testing

For testing HTML or related JS and CSS you are actively working on:

```
npm test
```

For the full run instructions, see the help message:
```
usage: node server.js --port=5000

This package serves the static HTML, CSS, and JS files in a /public directory.
It also creates logs in a common log format (CLF) so that you can better.

  --stat,  -s    Specify the directory for static files to be served
                    Default: ./public/
  --port, -p    Specify the port for the HTTP server to listen on
                    Default: 8080
  --log,  -l    Specify the directory for the log files
                    Default: ./log/
  --help, -h    Displays this help message and exit 0 
                    (Does not work when run with nodemon)
  --debug       Echos more information to STDOUT so that you can see what is
                    stored in internal variables, etc.
```

Look also at the script lines in the `package.json`:

```
"scripts": {
    "test": "nodemon -e js,css,html server.js --port=5000 --debug",
    "start": "node server.js",
    "demo": "nodemon -e js,css,html server.js --port=5000 --stat=demo"
  },
```

Using nodemon will let the server reload when you make changes to your HTML, JS, or CSS. 
Otherwise you will have to kill and reload the process.

## What is the autograder going to be looking for?

1. Valid HTML
2. Valid CSS
3. Working frontend interface served when server loaded. 
4. Working backend API served when server loaded.
5. Screenshots in `docs` directory as listed above.

These checks will be embargoed until LDOC to give you time to figure this out on your own.

## And go!
