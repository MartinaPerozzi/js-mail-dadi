// Gioco dei dadi

// Numero random per pc
const randomNumberMy = Math.floor(Math.random() * 6);
console.log(randomNumberMy);
// Numero random per user
const randomNumberUser = Math.floor(Math.random() * 6);
console.log(randomNumberUser);
// Creo un'arena
const containerPlayerOne = document.querySelector(".container-players>div");

const containerPlayerTwo = document.querySelector(".container-players>div:last-child");


// Partita
if (randomNumberMy > randomNumberUser) {

    containerPlayerOne.innerHTML += "Game over";

} else if (randomNumberMy < randomNumberUser) {

    containerPlayerTwo.innerHTML += "Game over";
}











