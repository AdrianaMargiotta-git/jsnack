//Generatore di “nomi cognomi” casuali: prendendo a caso un nome e un cognome da una lista di nomi e da una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

//creo le liste vere
var nomiInvitati = ['Jay', 'Nick', 'Daisy', 'Tom', 'George'];
var cognomiInvitati = ['Gatsby', 'Carraway', 'Buchanan', 'Buchanan', 'Wilson'];
var listaInvitati = [];

//stampo liste vere
console.log("Lista nomi veri: ", nomiInvitati);
console.log("Lista cognomi veri: ", cognomiInvitati);

console.log("--------------------------------------");
//creo il ciclo per generare random la lista degli invitati
for (var i = 0; i < nomiInvitati.length; i++) {
  var nomiFalsi = Math.floor(Math.random() * nomiInvitati.length);
  var cognomiFalsi = Math.floor(Math.random() * cognomiInvitati.length);
  listaInvitati.push(nomiInvitati[nomiFalsi] + " " + cognomiInvitati[cognomiFalsi]);
};
console.log("Lista invitati falsi: " , listaInvitati);
