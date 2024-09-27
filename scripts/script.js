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
let collectWinnings = document.getElementById(`collectWinnings`);

let diceDisplay = document.getElementById('diceDisplay');




// //Creating a new Element for displaying dice result and appending it to "body" parent node
// let diceDisplay = document.createElement(`div`);
// diceDisplay.classList.add(`hidden`);
// diceDisplay.setAttribute(`id`, `diceDisplay`);
// // console.log(diceDisplay);
// myGame.insertBefore(diceDisplay, resetGameButton);
// // console.log(myGame);


//Cache initial values
let iniBalance = Number(balance.textContent);



startButton.addEventListener(`click`, startPlayNew);
placeBet.addEventListener(`click`, placeBetValidation);
rollDice.addEventListener(`click`, betConditionVerification);
resetGameButton.addEventListener(`click`, resetGameFunction);
collectWinnings.addEventListener(`click`, collectWinningsFunction);





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
let count = 0;
function placeBetValidation(eve) {
    eve.preventDefault();

    // console.log(eve.target);
    // console.log(betAmount.value);

    if (betAmount.value < betAmount.min || betAmount.value > betAmount.max || !Number.isInteger(betAmount.value)) {
        alert(`Enter proper bet amount between 10 and 25`);
    }

    else {

        if (balance.innerHTML - betAmount.value < 0) {
            //console.log(betAmount.value, balance.innerText)
            alert(`Insufficient balance`);
        }

        else {
            balance.innerHTML = balance.innerHTML - betAmount.value;
            betConditionContainer.classList.remove(`hidden`);
            count++;

        }

        if (count !== 0) {
            placeBet.disabled = true;
        }


    }



}



//Function to place your bet condition and roll the dice
function betConditionVerification(eve) {

    eve.preventDefault();
    placeBet.disabled = false;

    //console.log(betCond[0]);
    for (let i = 0; i < betCond.length; i++) {
        if (betCond[i].checked) {
            // console.log(betCond[i].value);
            let dice = Math.floor(Math.random() * (13 - 2) + 2);
            console.log(dice);

            // Show dice roll animation
            //dice.classList.remove('hidden');

            diceDisplay.classList.remove(`hidden`);
            //diceDisplay.innerHTML = dice;

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

        collectWinnings.classList.remove(`hidden`);
    }


    if (!betCond[0].checked && !betCond[1].checked && !betCond[2].checked) {
        alert(`Choose a betting condition`);
        balance.innerHTML = Number(balance.innerHTML) + Number(betAmount.value);

    }


    for (let i of betCond) {
        i.checked = false;
        i.checked = false;
        i.checked = false;
    }


    betAmount.value = ``;
    betAmount.focus();

    setTimeout(() => {
        betConditionContainer.classList.add(`hidden`);
        diceDisplay.classList.add(`hidden`);
    }, 1000); // 2000 milliseconds (2 seconds)
}



//Collect Winnings button

function collectWinningsFunction(eve) {

    eve.preventDefault();
    console.log(eve.target);
    let win, loss;
    if (iniBalance - Number(balance.textContent) > 0) {
        loss = iniBalance - Number(balance.textContent);
        win = 0;
        confirm(`Sorry ${playerName.textContent}. Your final balance is $${balance.innerHTML}. You have won $${win} and lost $${loss}.`)

    }
    else if (Number(balance.textContent) - iniBalance > 0) {
        win = Number(balance.textContent) - iniBalance;
        loss = 0;
        confirm(`Congratulations ${playerName.textContent}. Your final balance is $${balance.innerHTML}. You have won $${win} and lost $${loss}.`)
    }

    else {
        win = 0;
        loss = 0;
        confirm(`Way to stay consistent ${playerName.textContent}. Your final balance is $${balance.innerHTML}. You have won $${win} and lost $${loss}.`)
    }



    if (confirm) {
        location.reload();
    }

}




//Reload page button
function resetGameFunction() {
    location.reload();
}











