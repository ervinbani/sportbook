var giocatore1={
  "nome":"icardi",
  "Nationality":"argentina",
  "position":"attacante",
  "height":"190",
  "weight":"80",
  "age":"24",
  "image":"icardi.jpg"

}
var giocatore2={
  "nome":"mirada",
  "Nationality":"brasile",
  "position":"attacante",
  "height":"190",
  "weight":"89",
  "age":"28",
  "image":"miranda.jpg"
}
var giocatore3={
  "nome":"perisic",
  "Nationality":"croazia",
  "position":"attacante",
  "height":"178",
  "weight":"77",
  "age":"12",
  "image":"perisic.jpg"

}
var giocatore4={
  "nome":"candreva",
  "Nationality":"italia",
  "position":"centrocampista",
  "height":"199",
  "weight":"90",
  "age":"31",

  "image":"candreva.jpg"

}
var giocatore5={
  "nome":"gustavo",
  "Nationality":"colombia",
  "position":"centrocampista",
  "height":"183",
  "weight":"88",
  "age":"29",
  "image":"gustavo.jpg"

}

var giocatore=[giocatore1, giocatore2, giocatore3,giocatore4,giocatore5, giocatore5];
console.log(giocatore);
var idgiocatore=[];
for(var i=0;i<giocatore.length;i++){
  idgiocatore.push(alfanumerico());

}
console.log(idgiocatore);
var listadati=document.getElementById('datiplayer').valueOf();
for(var i=0;i<giocatore.length;i++){

  listadati.innerHTML += "<li>" + giocatore[i].nome + "</li>";
}

//istruzioni che cercano all'utente di inserire un ID e il programma stampa
//i dati del giocatore con le relative statistiche
var cerca = document.getElementById('btn').valueOf();
cerca.addEventListener('click', trovagiocatore);




function alfanumerico(){
  var casualarray=[];
  var array1=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var array2=[1, 2, 3, 4, 5, 6, 7, 8, 9];
  for(var i=0;i<3;i++){
    casualarray.push(array1[Math.floor(Math.random()*array1.length)+1]);

  }
  for(var i=0;i<3;i++){
    casualarray.push((Math.floor(Math.random()*10)+1));

  }
  return casualarray.join("");

}

function trovagiocatore(){
  var inputUtente=document.getElementById('input').valueOf();
  var giocatoreCorrente=document.getElementById('numplayer').valueOf();
  for(var i=0;i<idgiocatore.length;i++){
    if(idgiocatore[i].valueOf()==inputUtente.valueOf()){
      giocatoreCorrente.innerHTML = "ID:" +idgiocatore[i] + "Cognome:"+giocatore[i].nome +  "Nazionalità:"+ giocatore[i].Nationality;
    }


  }

}
