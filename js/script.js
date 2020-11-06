
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var arrayNumPc = [];
var arrayNumUte =[];
var arrayNumeriTrovati=[];
//genero 5 numeri diversi random tra 1 e 100 e li inserisco in un array
while(arrayNumPc.length < 5)
{
   var n = randomNum(50);
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

setTimeout(function()
{
  alert('sono passati 4 sec puoi iniziare a darmi i tuoi numeri');
  for (var i = 0; i < 5; i++)
  {

    //l'utente inserisce un numero
    var n = parseInt(prompt('inserisci un numero da 1 a 100'));
    //verifico che possa inserirlo con controlli e se presente nel mio arraynumPc
    if(arrayNumUte.includes(n) || n > 50 || isNaN(n) )
    {
      alert('ATTENZIONE numero non valido immetti un numero tra 1 e 50');
      i--;
      //altrimenti se sono inclusi nei numeri randoPc
    }else if(arrayNumPc.includes(n))
    {
      //inseriscili nell'array trovati
      arrayNumeriTrovati.push(n)
    }
    arrayNumUte.push(n);
  }
  //stampo i numeri giusti e il punteggio
    console.log('numeri trovati: ', arrayNumeriTrovati);
    console.log('il tuo punteggio e': ',arrayNumeriTrovati.length);
}
, 4000);//da cambiare in 30 sec


//FUNZIONI
  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }
