let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let hasName = false;

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");
const startEl = document.getElementById("start-el");

let player = {
  name: "",
  chips: 200,
};

startEl.style.display = "none";

function insertName() {
  let nameVal = document.getElementById("name").value;

  startEl.style.display = "block";
  player.name = nameVal;
  playerEl.textContent = player.name + ": $" + player.chips;
  let addNameEl = document.getElementById("addName");
  addNameEl.textContent = "";
  hasName = true;
}

function getRandomCard() {
  var randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  if (hasName) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cards[cards.indexOf(11)] = "J";
    cards[cards.indexOf(12)] = "Q";
    cards[cards.indexOf(13)] = "K";

    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false && hasName) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
