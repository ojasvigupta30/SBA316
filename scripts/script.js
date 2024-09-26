let playerName = document.getElementById(`playerName`);
let heading = document.getElementsByTagName(`h1`);
let startButton = document.getElementById(`startPlay`);
let betAmount = document.getElementById(`betAmount`);
let placeBet = document.getElementById(`placeBetButton`);
let balance = document.getElementById(`balance`);
let betCond = document.querySelectorAll(`input[name="betCondition"]`);
let rollDice = document.querySelector(`#rollDiceButton`);
let resetGameButton = document.getElementById(`resetButton`);
let myGame = document.getElementById(`myGame`);
let gameContainer = document.getElementById(`gameContainer`);




startButton.addEventListener(`click`, startPlayNew);
placeBet.addEventListener(`click`, placeBetValidation);






// Function to start a new game and entering player name
function startPlayNew(eve) {

    eve.preventDefault();


    //console.log(eve.target);

    if (eve.target) {
        let welcomeMsg = prompt(`Enter your name if you wish to test your luck`);


        if (welcomeMsg === null || welcomeMsg === ``) {
            window.alert(`Enter player name`);

        }

        else {
            playerName.innerHTML = ` ${welcomeMsg.toUpperCase()} `;
            console.log(playerName.innerText);
            gameContainer.classList.remove(`hidden`);

            return;
        }

    }

}


// Function to set a bet amount value (between 10-25)
function placeBetValidation(eve) {
    eve.preventDefault();

    // console.log(eve.target);
    // console.log(betAmount.value);

    if (betAmount.value < betAmount.min || betAmount.value > betAmount.max) {
        alert(`Enter bet amount between 10 and 25`);
    }

    else {

        if (balance.innerHTML - betAmount.value < 0) {
            //console.log(betAmount.value, balance.innerText)
            alert(`Insufficient balance`);
        }

        else {
            balance.innerHTML = balance.innerHTML - betAmount.value;

        }
    }

}


