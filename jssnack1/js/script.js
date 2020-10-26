//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.//

//inserisco il primo numero
var numeroUno = prompt("inserisci un numero");
console.log("il primo numero inserito è il numero: ", numeroUno);

//inserisco il secondo numero
var numeroDue = prompt("inserisci un'altro numero");
console.log("il secondo numero inserito è il numero: ", numeroDue);

//troviamo e stampiamo il numero maggiore
var numeroMassimo = Math.max(numeroUno, numeroDue);
console.log("il numero maggiore o uguale è il numero: ", numeroMassimo);
