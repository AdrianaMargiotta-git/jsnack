//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

//con la variabile numeri generalizzo l'esercizio al fine di sommare n numeri.

//dichiaro le variabili
var domanda;
var somma;
var numeri;

var somma = 0;

var numeri = parseInt(prompt("Quanti numeri vuoi sommare"));

//ciclo for
/*for (var i = 0; i < numeri; i++) {
  domanda = parseInt(prompt("Inserisci un numero"));
  console.log(domanda);
  somma = somma + domanda;
}
  //stampo il risultato
  console.log("la somma dei numeri inseriti è: ", somma);*/

//ciclo while
i = 0;
while (i<numeri) {
  domanda = parseInt(prompt("Inserisci un numero"));
  console.log(domanda);
  somma = somma + domanda;
  i++;
}
  //stampo il risultato
  console.log("la somma dei numeri inseriti è: ", somma);
