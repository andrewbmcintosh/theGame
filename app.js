playerTurnCount = ($('.columnOne').children().length) + ($('.columnTwo').children().length) + ($('.columnThree').children().length) + ($('.columnFour').children().length) + ($('.columnFive').children().length) + ($('.columnSix').children().length) + ($('.columnSeven').children().length) + 1



$(".columnTwo").click(function () {
if (playerTurnCount % 2 == 0){
  $('.columnTwo').append($('<div class="item">test</div>'));
} else {
    $('.columnTwo').append($('<div class="item">test</div>'));
 
}


)