

$(document).ready(function() {
let click = 1;
  let game = function(){
  $('#game-wrap').show();
    $(".col").click(function(e) {
    if (click % 2 === 0) {
      $(event.target).html("X");
    } else {
      $(event.target).html("O");
    }
    displayResult();
    click++

  });
}


  displayResult = function() {
let playerOneScore = 0;
let playerTwoScore = 0;
    let gameRows = {
      rowOne: $('.col1').text(),
      rowTwo: $('.col2').text(),
      rowThree: $('.col3').text(),
      rowFour: $('.col4').text(),
      rowFive: $('.col5').text(),
      rowSix: $('.col6').text(),
      rowSeven: $('.col7').text(),
      rowEight: $('.col8').text()
    }

    for (let key in gameRows) {
      if (gameRows[key] === "XXX") {
        $('#X').show();
        playerOneScore++;
        setTimeout("location.href = 'file:///Users/Sandy/wdi/projects/project0/tictac.html'",3000);
        return;
      } else if (gameRows[key] === "OOO") {
        $('#Y').show();
        playerTwoScore++;
        setTimeout("location.href = 'file:///Users/Sandy/wdi/projects/project0/tictac.html'",3000);
        return;
      }
    }

    if (click >= 9){
        $('#draw').show();
        setTimeout("location.href = 'file:///Users/Sandy/wdi/projects/project0/tictac.html'",3000);

    }

  }

$('#start').click(function(){
  $('#gameType').show();
  $('#start').hide();
})

$('#gameType').click(function(){
  $('#playerType').show();
  $('#gameType').hide();
})

$('#playerOne').click(function(){
  $('#playerType').hide();
  click = 2;
  game();
})

$('#playerTwo').click(function(){
  $('#playerType').hide();
  click = 1;
  game();
})

});
