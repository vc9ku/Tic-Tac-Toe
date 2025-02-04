const $unselectedPlayer = document.querySelector(".new-game-screen-pick-player-icon")
const $selectedPlayer = document.querySelector(".new-game-screen-pick-player-icon--selected")

// Get player to the game page

const $startGame = document.querySelector(".new-game-screen-new-game-buttons__button")
const $displayGame = document.querySelector(".display-game")
const $hideStart = document.querySelector("main")

console.log($unselectedPlayer)
console.log($selectedPlayer)

// Select character 

$unselectedPlayer.addEventListener("click", function(e) {
    $unselectedPlayer.classList.add("new-game-screen-pick-player-icon--selected")
    $selectedPlayer.classList.remove("new-game-screen-pick-player-icon--selected")
})

$selectedPlayer.addEventListener("click", function(e) {
    $selectedPlayer.classList.add("new-game-screen-pick-player-icon--selected")
    $unselectedPlayer.classList.remove("new-game-screen-pick-player-icon--selected")
})

// Start Game

$startGame.addEventListener("click", function(e) {
    $hideStart.classList.add("is-hidden")
})

$startGame.addEventListener("click", function(e) {
    $displayGame.classList.remove("is-hidden")
})
 