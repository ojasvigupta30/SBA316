# DICE Luck Betting Game

## Overview

The **DICE Luck Betting Game** is a web-based interactive betting game where players can test their luck by betting on dice rolls. The game allows players to place bets on whether the dice roll will be less than seven, exactly seven, or greater than seven, all while managing a balance. The game includes a fun and engaging UI styled with various themed fonts and background elements.

## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: For the styling and layout of the webpage.
- **JavaScript**: For handling the game's interactivity and logic.
- **Google Fonts**: For the different typography used in the game.

## Features

- **Player Name Input**: Players can enter their names to personalize their experience.
- **Betting System**: Players start with a balance of $100 and can place bets between $10 and $25.
- **Dice Roll**: Players can bet on three different outcomes (less than seven, exactly seven, or greater than seven) with a dice roll determining their win or loss.
- **Animated Dice**: When a player rolls the dice, an animation is shown to enhance the user experience.
- **Betting History**: Players can view their previous bets, results, and balance changes.
- **Collect Winnings**: Once a player has finished their game, they can collect their winnings and see how much they won or lost.
- **Reset Game**: Players can reset the game and try their luck again.

## Getting Started

### Prerequisites

To run this game locally, you'll need:
- A modern web browser (Google Chrome, Firefox, Edge, Safari, etc.)
- An internet connection (for loading Google Fonts)

### Running the Game

1. **Clone the Repository**:

```bash

git clone https://github.com/ojasvigupta30/SBA316.git
cd SBA316
```

2. **Open the index.html file in your browser**: Simply open the ```index.html``` file in any modern web browser by double-clicking the file or dragging it into the browser window.

3. **Start Playing**: Enter your name when prompted, place a bet between $10 and $25, and select your bet condition (less than seven, seven, or greater than seven). Roll the dice and see if luck is on your side!

### Betting Conditions

- **Less Than Seven**: Wins if the dice roll is between 2 and 6.
- **Seven**: Wins if the dice roll is exactly 7 (pays double the bet).
- **Greater Than Seven**: Wins if the dice roll is between 8 and 12.

### Files

#### HTML
`index.html`: The main structure of the game, including forms for user input and placeholders for game elements like balance, betting, and history.
### CSS
`style.css`: The stylesheet for the game, containing styles for the fonts, layout, and visual elements such as the dice display and betting table.
### JavaScript
`script.js`: The logic for the game, including event listeners for buttons, dice rolling mechanics, validation for bets, and updating the UI with betting results.

## How the Game Works

- **Player Name**: The game starts by asking the player to input their name. This name is then displayed in the greeting message.
Place Bet: The player sets a bet amount between $10 and $25, and the balance is reduced accordingly.
- **Bet Condition**: The player selects whether they are betting on a result less than seven, exactly seven, or greater than seven.
- **Roll Dice**: The player rolls a virtual dice. Based on the outcome and the selected bet condition, the game will either award winnings or subtract the bet amount.
- **View Betting History**: The player can track their betting history, including the dice rolls, bet amounts, and balance after each round.
- **Collect Winnings**: At the end of the game, the player can collect their winnings and see a summary of how much they won or lost.
- **Reset Game**: The player can reset the game and try their luck again.

## Font Usage
- **Honk**: For the main headings.
- **Permanent Marker**: Used for buttons and form elements to create a handwritten effect.
- **Bungee Tint**: Adds a playful, bold look to paragraphs.
- **Shadows Into Light**: Used in form labels for a cursive, light look.
- **Press Start 2P**: Styled for the game result display, giving it a retro, pixel-art feel.

## Credits
- Fonts and UI inspiration from Google Fonts.
- Dice roll logic inspired by random number generation techniques.
