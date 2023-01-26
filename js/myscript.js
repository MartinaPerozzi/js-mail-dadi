// Creo una lista di email
const checkedEmails = ["perozzimartina@gmail.com", "art.malune@gmail.com", "pippo.12@gmail.com", "genoveffa@libero.it"];
console.log(checkedEmails);


// Creo un bottone con cui gli utenti possono inviare i dati richiesti
const buttonSubmit = document.querySelector(".button-proceed");
console.log(buttonSubmit);

buttonSubmit.addEventListener(
    "click",
    function () {
        // Chiedo all'utente la sua email
        const userEmail = document.querySelector("input").value;
        console.log(userEmail);

        // Scorro le email per verificarle

        for (let i = 0; i < checkedEmails.length; i++) {
            const currentEmail = checkedEmails[i];
            console.log(currentEmail);

            // condizione 1

            if (userEmail == currentEmail) {
                document.querySelector(".message").innerHTML = "Benvenuto!";
                // condizione 2 
            } else if (userEmail !== currentEmail) {
                document.querySelector(".message").innerHTML = "Accesso negato!";
            }
        }
    }

)





