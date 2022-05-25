function rollOne() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var image1Source = "images/dice" + randomNumber1 + ".png";
    var image1 = document.getElementsByTagName("img")[0];
    
    image1.setAttribute("src", image1Source);
}

function rollTwo() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image2Source = "images/dice" + randomNumber2 + ".png";
    var image2 = document.getElementsByTagName("img")[1];
    
    image2.setAttribute("src", image2Source);
}


rollOne();
rollTwo();

var p1 = document.getElementsByTagName("img")[0].getAttribute("src").slice(-5, -4);
var p2 = document.getElementsByTagName("img")[1].getAttribute("src").slice(-5, -4);

if (p1 > p2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if (p1 < p2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}
