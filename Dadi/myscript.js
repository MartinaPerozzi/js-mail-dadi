// Gioco dei dadi

// Creo un'arena
const containerPlayerOne = document.querySelector(".container-players>div");

const containerPlayerTwo = document.querySelector(".container-players>div:last-child");

const result = document.querySelector(".winner-or");

// Creo il bottone per giocare
const playButton = document.querySelector(".button-play>input");

// Prova bottone
playButton.addEventListener(
    "click",
    function () {
        // Numero random per pc
        const randomNumberMy = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumberMy);


        // Numero random per user
        const randomNumberUser = Math.floor(Math.random() * 6 + 1);
        console.log(randomNumberUser);




        // containerPlayerTwo.querySelector(".winner-or").innerHTML = randomNumberUser;
        // containerPlayerOne.querySelector(".winner-or").innerHTML = randomNumberMy;

        // Partita
        if (randomNumberMy > randomNumberUser) {

            containerPlayerTwo.innerHTML = randomNumberUser + " Game Over";
            containerPlayerOne.innerHTML = randomNumberMy + " Winner";

        } if (randomNumberMy < randomNumberUser) {

            containerPlayerOne.innerHTML = randomNumberMy + " Game Over";
            containerPlayerTwo.innerHTML = randomNumberUser + " Winner";

        } else if (randomNumberMy == randomNumberUser) {
            containerPlayerOne.innerHTML = randomNumberMy + " Pareggio!";
            containerPlayerTwo.innerHTML = randomNumberMy + " Pareggio!";

        }

    }
)












