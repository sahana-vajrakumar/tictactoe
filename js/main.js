
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
        $('#player1Win').text(`PlayerX Score: ${playerOneScore}`)

        return;
      } else if (gameRows[key] === "OOO") {
        $('#Y').show();
        playerTwoScore++;
        $('.col').off('click');
        $('#player2Win').text(`PlayerO Score: ${playerTwoScore}`)
        return;
      }
    }
    if (numberOfClicks >= 8){
        $('#draw').show();
        return;
    }

  }
//this is for AI
let clickCount = 0;
  let aiGame = function(){
    $(".col").off("click");
    $(".col").one("click" , function(e) {
      $(event.target).html("X");

      let alreadyClicked = true;
      while(alreadyClicked){
        let randomNumber = Math.floor((Math.random() * 9) + 1);
        // console.log(randomNumber);
        // console.log(clickCount);
        if($(`#id${randomNumber}`).text() === ""){

          $(`#id${randomNumber}`).html("O");

          alreadyClicked = false;
          clickCount = clickCount + 2;

        }

        if(clickCount>7){
          break;
        }
      }

displayResult();
});
};

$('#start').click(function(){
  $('#gameType').show();
  $('#start').hide();
})

$('#single').click(function(){
  $('#restartSingleMode').show();
  $('#game-wrap').show();
  $('#gameType').hide();
  aiGame();
})

$('#multi').click(function(){
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
  numberOfClicks = 0;
  $('.col').html('');
  game();
  $('#X').hide();
  $('#Y').hide();
  $('#draw').hide();
});

$('#restartSingleMode').click(function(){
  clickCount = 0;
  $('.col').html('');
  aiGame();
  $('#X').hide();
  $('#Y').hide();
  $('#draw').hide();
});


});
