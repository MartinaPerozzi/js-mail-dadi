// Gioco dei dadi

// Creo un'arena
const containerPlayerOne = document.querySelector(".container-players>div");

const containerPlayerTwo = document.querySelector(".container-players>div:last-child");

// Numero random per pc
const randomNumberMy = Math.floor(Math.random() * 6);
console.log(randomNumberMy);
containerPlayerOne.querySelector(".winner-or").innerHTML += randomNumberMy;

// Numero random per user
const randomNumberUser = Math.floor(Math.random() * 6);
console.log(randomNumberUser);
containerPlayerTwo.querySelector(".winner-or").innerHTML += randomNumberUser;


// Partita


if (randomNumberMy > randomNumberUser) {

    containerPlayerTwo.innerHTML += "Game Over";

} else if (randomNumberMy < randomNumberUser) {

    containerPlayerOne.innerHTML += "Game Over";
}










