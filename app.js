
$(".columnOne").click(function () {

    if ($(".disc").length % 2 == 0) {
        $('.columnOne').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnOne').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
$(".columnTwo").click(function () {

    if ($(".disc").length % 2 == 0) {
        $('.columnTwo').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnTwo').append($('<div class="disc playerTwoItem">test</div>'));

    }
})

$(".columnThree").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnThree').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnThree').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
$(".columnFour").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnFour').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnFour').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
$(".columnFive").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnFive').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnFive').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
$(".columnSix").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnSix').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnSix').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
$(".columnSeven").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnSeven').append($('<div class="disc playerOneItem">test</div>'));
    } else {
        $('.columnSeven').append($('<div class="disc playerTwoItem">test</div>'));

    }
})
// need to do something that extends flex
// container down the length of the column without having a grid display