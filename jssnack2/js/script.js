//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//inserisco la prima parola
var parolaUno = prompt("inserisci una parola");
console.log("la prima parola inserita è: ", parolaUno);

//inserisco la seconda parola
var parolaDue = prompt("inserisci un'altra parola");
console.log("la seconda parola inserita è: ", parolaDue);

//trovo
if (parolaUno.length > parolaDue.length) {
  document.write("<h3>la parola più lunga è: </h3>", parolaUno);
  document.write("<h3>la parola più corta è: </h3>", parolaDue);
  console.log("la parola più lunga è: ", parolaUno);
  console.log("la parola più corta è: ", parolaDue);
} else if (parolaUno.length < parolaDue.length){
  document.write("<h3>la parola più lunga è: </h3>", parolaDue);
  document.write("<h3>la parola più corta è: </h3>", parolaUno);
  console.log("la parola più lunga è: ", parolaDue);
  console.log("la parola più corta è: ", parolaUno);
} else {
  document.write("<h3>le parole hanno la stessa lunghezza</h3>");
}
