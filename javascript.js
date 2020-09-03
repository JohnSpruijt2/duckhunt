var topPx = 250;
var leftPx = 800;
var clicked = false;
var hits = 0;
var misses = 0;
function hitBird() {
    clicked = true;
    hits++;
    document.getElementById("hits").innerHTML = hits;
    endCheck()
}
function missBird() {
    if (clicked == false) {
        misses++;
        document.getElementById("misses").innerHTML = misses;
    }
    clicked = false;
    endCheck()
}
function Bird() {
    setInterval(function () {
    var randomNumber = Math.floor((Math.random() * 8) + 1);

    //North
    if (randomNumber == 1) {
        topPx -= 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;
    }
    //northEast
    else if (randomNumber == 2) {
        topPx -= 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;

        leftPx += 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
    //East
    else if (randomNumber == 3) {
        leftPx += 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
    //SouthEast
    else if (randomNumber == 4) {
        topPx += 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;

        leftPx += 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
    //South
    else if (randomNumber == 5) {
        topPx += 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;
    }
    //SouthWest
    else if (randomNumber == 6) {
        topPx += 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;

        leftPx -= 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
    //West
    else if (randomNumber == 7) {
        leftPx -= 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
    //NorthWest
    else if (randomNumber == 8) {
        topPx -= 10;
        var topPxPx = topPx+'px';
        bird.style.top = topPxPx;

        leftPx -= 10;
        var leftPxPx = leftPx+'px';
        bird.style.left = leftPxPx;
    }
}, 1500);
}

function endCheck() {
    if (hits+misses == 20) {
        clearInterval();
        bird.style.display = "none";
        document.getElementById("hitDiv").style.display = "none";
        document.getElementById("missDiv").style.display = "none";
        document.getElementById("gameoverDiv").style.display = "initial";
        document.getElementById("gameoverHit").innerHTML = hits+" hits";
        document.getElementById("gameoverMiss").innerHTML = misses+" missed";
    }
}