
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
$(document).ready(function()
{

  var arrayNumPc = [];
  var arrayNumUte =[];
  var arrayNumeriTrovati=[];

  // nascondo il bottone dell'inizio gioco e del reset
  $('.game').hide();
  $('.reset').hide();
  //genero 5 numeri diversi random tra 1 e 50 e li inserisco in un array
  while(arrayNumPc.length < 5)
  {
     var n = randomNum(50);
     if (arrayNumPc.indexOf(n) == -1)
     {
      arrayNumPc.push(n);
      $('.numbers').append( '<h4>' + n + '</h4>');
      $(".numbers").hide(); //li nascondo all'utente
     }
  }

  //gestisco la visualizzazione del box numeri da memorizzare

  $(".visualizza").click(function()
  {
    $('.visualizza').hide();//faccio sparire il bottone per visualizzare numeri Simons
    $(".numbers").show(); // Visualizzo i numero di Symons
    setTimeout(function()
    {
      $(".numbers").hide();
      $('.game').show();
    }, 5000);//li visualizzo per 5 sec
  });
  //stampo a video gli elementi randomici


  // alert('i numeri sono:  ' + arrayNumPc + '   saprai ricordarli' );
  console.log('i numeri generati sono: ', arrayNumPc);

  //faccio aspettare n sec e poi faccio partire il resto
  $(".game").click(function()
  {
    $('.game').hide();
    setTimeout(function()
    {
      alert('sono passati 4 sec puoi iniziare a darmi i tuoi numeri');
      for (var i = 0; i < 5; i++)
      {

        //l'utente inserisce un numero
        var n = parseInt(prompt('inserisci un numero da 1 a 50'));
        //verifico che possa inserirlo con controlli e se presente nel mio arraynumPc
        if(arrayNumUte.includes(n) || n > 50 || isNaN(n) || n === 0)
        {
          alert('ATTENZIONE numero non valido immetti un numero tra 1 e 50');
          i--;
          //altrimenti se sono inclusi nei numeri randoPc
        }else if(arrayNumPc.includes(n))
        {
          //inseriscili nell'array trovati
          arrayNumeriTrovati.push(n)
          console.log('numeri trovati: ', arrayNumeriTrovati,'  il tuo punteggio è: ', arrayNumeriTrovati.length);
          $('.box-numute').append('<h4>' + n + '</h4>');
        }
        arrayNumUte.push(n);
      }
      //stampo i numeri giusti e il punteggio
      //faccio sparire il tasto Game
      //faccio apparire i numeri del Pc e il tasto reset
      $(".numbers").show();
      $('.reset').show();

      $('.box-score').append(arrayNumeriTrovati.length);


    }, 4000);//da cambiare in 30 sec
  });


  $('.reset').click(function()
  {
    location.reload();
  });

});

//FUNZIONI
  //numero random
  function randomNum(num)
  {
    return Math.floor(Math.random()*num)+1;
  }
