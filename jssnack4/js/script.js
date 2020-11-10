//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var arrayVuoto = [];

for (var i = 0; i < 6; i++) {
  var numeroUser = parseInt(prompt("Inserisci un numero"));
  console.log("il numero inserito dall'utente è: ", numeroUser);
  if (numeroUser % 2 != 0) {
    arrayVuoto.push(numeroUser);
    console.log(arrayVuoto);
  };
};

document.getElementById('risultato').innerHTML = "L'array dei numeri dispari è: " + arrayVuoto;
