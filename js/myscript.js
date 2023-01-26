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



        for (let i = 0; i < checkedEmails.lenght; i++) {
            const currentEmail = checkedEmails[i];
            console.log(currentEmail);


        }

    }




)
    // Se l'email corrisponde a uno dei valori delle checkedEmails
    // const theCheck = (userEmail == checkedEmails);
    // console.log(theCheck);


        // if (userEmail == checkedEmails) {
        //     document.querySelector(".message").innerHTML = "Benvenuto ";
        // }




