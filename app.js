
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
    // console.log($('.columnTwo').children());
    if ($(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem").length == 1) {
        alert("Player Two Wins");
    }
});

// THIS WORKS TO SEE IN COLUMN BEFORE
$('.columnTwo').prev().children('.playerTwoItem:eq(0)')


// function gathers the items with the child index stated
$('.playerTwoItem:nth-child(1)')

// gathers all of the items that are a specific child and return the length
$('.column').find('.playerTwoItem:nth-child(2)').length



// creating a button to test logic
let columnCounter = 2

$('button').click(function () {
    if ($('.columnOne').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
        console.log("if statement works")
    } else {
        console.log("doesnt work")
    }
})









// let playerTwoItemEq = []

// $('button').click(function () {
//     $('playerTwoItem').each(function () {
//         playerTwoItemEq += $(this).map()
//         console.log(playerTwoItemEq)
//     })
// })





// trash below 

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