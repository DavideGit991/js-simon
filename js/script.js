
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var arrayNumPc = [];
var arrayNumUte =[];
//genero 5 numeri diversi random tra 1 e 100 e li inserisco in un array
while(arrayNumPc.length < 5)
{
   var n = randomNum(100);
   if (arrayNumPc.indexOf(n) == -1)
   {
    arrayNumPc.push(n);
    // stampa1 += "<li>" + n + "</li>"; //stampo a video gli elementi randomici
   }

}

//stampo a video gli elementi randomici
alert('i numeri sono:  ' + arrayNumPc + '   saprai ricordarli' );
console.log('i numeri generati sono: ', arrayNumPc);

//faccio aspettare 30 sec e poi faccio partire il resto

setTimeout(function(){
  alert('sono passati 30 sec puoi iniziare a darmi i tuoi numeri');
  while(arrayNumUte.length < 5)
  {
     var n = parseInt(prompt('inserisci un numero da 1 a 100'));
     if (arrayNumUte.indexOf(n) == -1)
     {
      arrayNumUte.push(n);
      // stampa1 += "<li>" + n + "</li>"; //stampo a video gli elementi randomici
     }
  }
  console.log("i numeri inseriti dall'utente sono: ", arrayNumUte,);
}
, 4000);//da cambiare in 30 sec


//FUNZIONI
  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }
