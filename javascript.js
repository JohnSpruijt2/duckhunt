var topPx = 250;
var leftPx = 800;
var clicked = false;
var hits = 0;
var misses = 0;
function hitBird() {
    clicked = true;
    hits++;
    document.getElementById("hits").innerHTML = hits;
}
function missBird() {
    if (clicked == false) {
        misses++;
        document.getElementById("misses").innerHTML = misses;
    }
    clicked = false;
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