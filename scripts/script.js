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
let betConditionContainer = document.getElementById(`betConditionContainer`);






//Creating a new Element for displaying dice result and appending it to "body" parent node
let diceDisplay = document.createElement(`div`);
diceDisplay.classList.add(`hidden`);
diceDisplay.setAttribute(`id`, `diceDisplay`);
// console.log(diceDisplay);
myGame.insertBefore(diceDisplay,resetGameButton);
// console.log(myGame);





startButton.addEventListener(`click`, startPlayNew);
placeBet.addEventListener(`click`, placeBetValidation);
rollDice.addEventListener(`click`, betConditionVerification);
resetGameButton.addEventListener(`click`, resetGameFunction);






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
            betConditionContainer.classList.remove(`hidden`);

        }
    }

}



//Function to place your bet condition and roll the dice
function betConditionVerification(eve) {

    eve.preventDefault();

    if (betAmount.value < betAmount.min || betAmount.value > betAmount.max) {
        alert(`Enter bet amount between 10 and 25`);
    }

    else {

        //console.log(betCond[0]);
        for (let i = 0; i < betCond.length; i++) {
            if (betCond[i].checked) {
                // console.log(betCond[i].value);
                let dice = Math.floor(Math.random() * (13 - 2) + 2);
                console.log(dice);
                diceDisplay.classList.remove(`hidden`);
                diceDisplay.innerHTML = dice;

                if (betCond[i].value == `lessThanSeven` && dice < 7) {

                    balance.innerHTML = Number(balance.innerHTML) + Number(betAmount.value);
                    //console.log(balance.innerHTML);


                }

                else if (betCond[i].value == `greaterThanSeven` && dice > 7) {
                    balance.innerHTML = Number(balance.innerHTML) + Number(betAmount.value);
                }

                else if (betCond[i].value == `seven` && dice == 7) {
                    balance.innerHTML = Number(balance.innerHTML) + (2 * Number(betAmount.value));
                }


            }

            betCond[i].checked = false;
        }

    }

    betAmount.value = ``;
    betAmount.focus();
    betConditionContainer.classList.add(`hidden`);
    diceDisplay.classList.add(`hidden`);
}


//Reload page button
function resetGameFunction() {
    location.reload();
}