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
  console.log('X wins');
}else if(rowOne === "OOO"){
  console.log('O wins');
}

if(rowTwo === "XXX"){
  console.log('X wins');
}else if(rowTwo === "OOO"){
  console.log('O wins');
}

if(rowThree === "XXX"){
  console.log('X wins');
}else if(rowThree === "OOO"){
  console.log('O wins');
}
}

let gameWonCol = function(){

  let rowOne = $('.col4').text();
  let rowTwo = $('.col5').text();
  let rowThree = $('.col6').text();
  if(rowOne === "XXX"){
    console.log('X wins');
  }else if(rowOne === "OOO"){
    console.log('O wins');
  }

  if(rowTwo === "XXX"){
    console.log('X wins');
  }else if(rowTwo === "OOO"){
    console.log('O wins');
  }

  if(rowThree === "XXX"){
    console.log('X wins');
  }else if(rowThree === "OOO"){
    console.log('O wins');
  }


}

let gameDiag = function(){
  let rowOne = $('.col7').text();
  let rowTwo = $('.col8').text();

  if(rowOne === "XXX"){
    console.log('X wins');
  }else if(rowOne === "OOO"){
    console.log('O wins');
  }

  if(rowTwo === "XXX"){
    console.log('X wins');
  }else if(rowTwo === "OOO"){
    console.log('O wins');
  }


}








});
