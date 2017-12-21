
$(document).ready(function() {
let count;
let numberOfClicks = 0;
let game = function(){
    $(".col").off("click");
    $(".col").one("click" , function(e) {
    if (count % 2 === 0) {
      $(event.target).html("X");
    } else {
      $(event.target).html("O");
    }
    displayResult();
    count++
    console.log(`count: ${count}`)
    numberOfClicks++;
    console.log(numberOfClicks)
    return;
  });
};

  let playerOneScore = 0;
  let playerTwoScore = 0;
  displayResult = function() {
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
        $('.col').off('click');
        return;
      } else if (gameRows[key] === "OOO") {
        $('#Y').show();
        playerTwoScore++;
        $('.col').off('click');
        return;
      }
    }
    if (numberOfClicks >= 8){
        $('#draw').show();
        return;
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
  $('#restart').show();
  count = 2;
  $('#game-wrap').show();
  game();

})

$('#playerTwo').click(function(){
  $('#playerType').hide();
  $('#restart').show();
  count = 1;
  $('#game-wrap').show();
  game();
})

$('#restart').click(function(){
// debugger;
  console.log( 'col text before setting to empty string:', $('.col').text());
  numberOfClicks = 0;
  $('.col').html('');

  console.log( 'col text:', $('.col').text());
  // $('#game-wrap').show()
  game();
  $('#X').hide();
  $('#Y').hide();
  $('#draw').hide();
});


});
