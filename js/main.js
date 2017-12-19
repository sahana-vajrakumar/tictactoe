$(document).ready(function(){
let click = 1;



  let displayX = function(e){
    $( event.target ).html( "X");
  }

  let displayO = function(e){
    $( event.target ).html( "O");
  }

$( ".col" ).click(function( e ) {
if(click % 2 === 0){

    displayX(e);
}else{

    displayO(e);

}
gameWonRows();
gameWonCol();
gameDiag();
click++
});


let gameWonRows = function(){
let rowOne = $('.col1').text();
let rowTwo = $('.col2').text();
let rowThree = $('.col3').text();

if(rowOne === "XXX"){
  $('#X').show();
}else if(rowOne === "OOO"){
  $('#Y').show();
}

if(rowTwo === "XXX"){
  $('#X').show();
}else if(rowTwo === "OOO"){
  $('#Y').show();
}

if(rowThree === "XXX"){
  $('#X').show();
}else if(rowThree === "OOO"){
  $('#Y').show();
}
}

let gameWonCol = function(){

  let rowOne = $('.col4').text();
  let rowTwo = $('.col5').text();
  let rowThree = $('.col6').text();
  if(rowOne === "XXX"){
    $('#X').show();
  }else if(rowOne === "OOO"){
    $('#Y').show();
  }

  if(rowTwo === "XXX"){
    $('#X').show();
  }else if(rowTwo === "OOO"){
    $('#Y').show();
  }

  if(rowThree === "XXX"){
    $('#X').show();
  }else if(rowThree === "OOO"){
    $('#Y').show();
  }


}

let gameDiag = function(){
  let rowOne = $('.col7').text();
  let rowTwo = $('.col8').text();

  if(rowOne === "XXX"){
    $('#X').show();
  }else if(rowOne === "OOO"){
    $('#Y').show();
  }

  if(rowTwo === "XXX"){
    $('#X').show();
  }else if(rowTwo === "OOO"){
    $('#Y').show();
  }


}








});
