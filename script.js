//birth BirthYear-number of days//
function ageInDays() {
    var yourBirthYear = prompt("what's your BirthYear?");
    var ageInDayss = (2021 - yourBirthYear) * 365;
    var h = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + " " + ageInDayss + " days" + " " + 'old');

    h.setAttribute('id', 'yourBirthYear');
    h.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h);
}

function reset() {
    document.getElementById('yourBirthYear').remove();
}


//cat generator//

function generate() {
    var image = document.createElement('img');
    var h = document.getElementById('gen');
    image.src = "https://cdn2.thecatapi.com/images/25.gif";
    h.appendChild(image);
}


//stone,paper/scissors//

function rpsGame(yourChoice, ) {
    console.log('yourChoice:', yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRps());
    console.log('computerChoice:', botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);

    rpsFrontEnd = frontEnd(yourChoice.id, botChoice, message);


}

function randToRps() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'you lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'you tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'you won!', 'color': 'green' }
    }
}

//FRONT END//

function frontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //Let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
function reset() {
    document.getElementById('rpsGame').reset();
}
