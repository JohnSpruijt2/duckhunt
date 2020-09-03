var topPx = 250;
var leftPx = 800;
var clicked = false;
function hitBird() {
    clicked = true;
    alert("you clicked bird");
    
}
function missBird() {
    if (clicked == false) {
        alert("you missed bird");
    }
    clicked = false;
}
function moveBird() {
    const randomNumber = Math.floor((Math.random() * 8) + 1);
    topPx = topPx+10;
    const px = topPx+"px";
    
    document.getElementById("bird").style.top = px; 
    if (randomNumber <= 1) {
        
    }
    else if (randomNumber == 2) {
        
    }
    else if (randomNumber == 3) {
        
    }
    else if (randomNumber == 4) {
        
    }
    else if (randomNumber == 5) {
        
    }
    else if (randomNumber == 6) {
        
    }
    else if (randomNumber == 7) {

    }
    else if (randomNumber == 8) {

    }
    
}