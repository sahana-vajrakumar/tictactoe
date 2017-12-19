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

displayResult();

click++

});



// let gameWonRows = function(){
// let rowOne = $('.col1').text();
// let rowTwo = $('.col2').text();
// let rowThree = $('.col3').text();
// let rowFour = $('.col4').text();
// let rowFive = $('.col5').text();
// let rowSix = $('.col6').text();
// let rowSeven = $('.col7').text();
// let rowEight = $('.col8').text();
//
// if(rowOne === "XXX"){
//   $('#X').show();
// }else if(rowOne === "OOO"){
//   $('#Y').show();
// }
//
// if(rowTwo === "XXX"){
//   $('#X').show();
// }else if(rowTwo === "OOO"){
//   $('#Y').show();
// }
//
// if(rowThree === "XXX"){
//   $('#X').show();
// }else if(rowThree === "OOO"){
//   $('#Y').show();
// }
//
// if(rowFour === "XXX"){
//   $('#X').show();
// }else if(rowFour === "OOO"){
//   $('#Y').show();
// }
//
// if(rowFive === "XXX"){
//   $('#X').show();
// }else if(rowFive === "OOO"){
//   $('#Y').show();
// }
//
// if(rowSix === "XXX"){
//   $('#X').show();
// }else if(rowSix === "OOO"){
//   $('#Y').show();
// }
// if(rowSeven === "XXX"){
//   $('#X').show();
// }else if(rowSeven === "OOO"){
//   $('#Y').show();
// }
//
// if(rowEight === "XXX"){
//   $('#X').show();
// }else if(rowEight === "OOO"){
//   $('#Y').show();
// }
// }

 displayResult = function() {

   let gameRows = {
    rowOne:$('.col1').text(),
    rowTwo :$('.col2').text(),
    rowThree:$('.col3').text(),
    rowFour:$('.col4').text(),
    rowFive:$('.col5').text(),
    rowSix:$('.col6').text(),
    rowSeven:$('.col7').text(),
    rowEight:$('.col8').text()
  }

  for (let key in gameRows){
    if(gameRows[key] === "XXX"){
      $('#X').show();
    }else if(gameRows[key] === "OOO"){
      $('#Y').show();
    }
  }
 }




});
