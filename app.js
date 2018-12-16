
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
// included the function below to see if player won on column
$(document).click(function () {
    console.log($('.columnTwo').children());
    if ($(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem").length == 1) {
        alert("Player Two Wins");
    }
});

// creating formula for finding row

$("input").map(function () {
    return $(this).val();
})

// does not work \|/
// if (
//     $(".columnOne").children().eq(1) ==
//     $(".columnTwo").children().eq(1) ==
//     $(".columnThree").children().eq(1) ==
//     $(".columnFour").children().eq(1)) {
//     alert("your a winner!")
// }
// $(".columnFive").children().eq(1)
// $(".columnSix").children().eq(1)
// $(".columnSeven").children().eq(1)
// win alert does not work /|\


// looping through eq with each?

// pottential dont need below
$(".disc").each(function (index) {
    console.log(index + ": " + $(this).text());
});

// Next Adjacent Selector will declare winner for columns
$(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem")

// if length = 1 of the Adjacent Selector  will alert winner. NEED TO FIND WAY TO CALL THIS IFF STATEMENT
// if ($(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem").length == 1) {
//     alert("Player Two Wins");
// }

// TRASH BELOW \|/ TRASH BELOW \|/
//     console.log(($('.disc').map(function (index, element) {
//         console.log($(element).text());
//     }).get()));

// });

// need to do something that extends flex
// container down the length of the column without having a grid display