let playerOneScore = 0;
let playerTwoScore = 0;


$(".columnOne").click(function () {

    if ($(".disc").length % 2 == 0) {
        $('.columnOne').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnOne').append($('<div class="disc playerTwoItem"></div>'));

    }
})
$(".columnTwo").click(function () {

    if ($(".disc").length % 2 == 0) {
        $('.columnTwo').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnTwo').append($('<div class="disc playerTwoItem"></div>'));

    }
})

$(".columnThree").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnThree').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnThree').append($('<div class="disc playerTwoItem"></div>'));

    }
})
$(".columnFour").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnFour').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnFour').append($('<div class="disc playerTwoItem"></div>'));

    }
})
$(".columnFive").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnFive').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnFive').append($('<div class="disc playerTwoItem"></div>'));

    }
})
$(".columnSix").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnSix').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnSix').append($('<div class="disc playerTwoItem"></div>'));

    }
})
$(".columnSeven").click(function () {
    let columnTwoDiscCount = $('.columnTwo').children().length

    if ($(".disc").length % 2 == 0) {
        $('.columnSeven').append($('<div class="disc playerOneItem"></div>'));
    } else {
        $('.columnSeven').append($('<div class="disc playerTwoItem"></div>'));

    }
})


// THIS WORKS TO SEE IN COLUMN BEFORE
$('.columnTwo').prev().children('.playerTwoItem:eq(0)')


// function gathers the items with the child index stated
$('.playerTwoItem:nth-child(1)')

// gathers all of the items that are a specific child and return the length
$('.column').find('.playerTwoItem:nth-child(2)').length

// Next Adjacent Selector will declare winner for columns
$(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem");

// if length = 1 of the Adjacent Selector  will alert winner. NEED TO FIND WAY TO CALL THIS IFF STATEMENT
// if ($(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem").length == 1) {
//     alert("Player Two Wins");
// }

// creating a button to test logic. ALSO the below if statement works. now will try to string together.
let columnCounter = 0

// function for playerTwo win for all columns
$(document).click(function () {
    if ($(" .playerTwoItem + .playerTwoItem + .playerTwoItem + .playerTwoItem").length == 1) {
        console.log("connectFour!")
        playerTwoScore += 1;
        alert(playerTwoScore);
        $('.disc').remove();
    }
});
// function for playerOne win for all columns
$(document).click(function () {
    if ($(" .playerOneItem + .playerOneItem + .playerOneItem + .playerOneItem").length == 1) {
        console.log("connectFour!")
        playerOneScore += 1;
        alert(playerOneScore);
        $('.disc').remove();
    }
});
// function for playerTwo row win on column 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {

        }
    }
})


// // function for playerTwo row win on column 2-5. There has got to be a way to make that first $ a variable so that you dont have to repeat code
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
            console.log("doesnt work")
        }
    }
})
// function for playerTwo row win on column 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo row win on column 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnSeven').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
});
// function for playerTwo diagonal up win 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal down win 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal up win 2-5
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal down win 2-5
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {

        if ($('.columnTwo').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal up win 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal down win 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
            console.log("doesnt work")
        }
    }
})
// function for playerTwo diagonal up win 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSeven').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerTwo diagonal down win 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerTwoItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFive').children().is('.playerTwoItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnSix').children().is('.playerTwoItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSeven').children().is('.playerTwoItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerTwoScore += 1;
                        alert(playerTwoScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// below is playerOneWin
// function for playerOne row win on column 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnThree').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// // function for playerOne row win on column 2-5. There has got to be a way to make that first $ a variable so that you dont have to repeat code
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnThree').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnFive').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne row win on column 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnFive').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnSix').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
            console.log("doesnt work")
        }
    }
})
// function for playerOne row win on column 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            if ($('.columnFive').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                if ($('.columnSix').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                    if ($('.columnSeven').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
});
// function for playerOne diagonal up win 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnThree').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal down win 1-4
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnOne').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnThree').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal up win 2-5
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnThree').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFive').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal down win 2-5
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnTwo').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnThree').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnFive').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal up win 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFive').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSix').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal down win 3-6
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnThree').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnFive').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSix').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})
// function for playerOne diagonal up win 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFive').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnSix').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSeven').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
            console.log("doesnt work")
        }
    }
})
// function for playerOne diagonal down win 4-7
$(document).click(function () {
    for (let columnCounter = 0; columnCounter < 7; columnCounter++) {
        if ($('.columnFour').children().is('.playerOneItem:nth-child(' + (columnCounter + 3) + ')') == true) {
            console.log(columnCounter)
            if ($('.columnFive').children().is('.playerOneItem:nth-child(' + (columnCounter + 2) + ')') == true) {
                console.log(columnCounter)
                if ($('.columnSix').children().is('.playerOneItem:nth-child(' + (columnCounter + 1) + ')') == true) {
                    console.log(columnCounter)
                    if ($('.columnSeven').children().is('.playerOneItem:nth-child(' + columnCounter + ')') == true) {
                        console.log("connectFour!")
                        playerOneScore += 1;
                        alert(playerOneScore);
                        $('.disc').remove();
                    }
                }
            }
        }
        else {
        }
    }
})