alert("Click Ok to start")

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumberImge = "images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomNumberImge);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomNumberImge2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomNumberImge2);
 
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 wins 🥳"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 wins 🥳"
} else if (randomNumber1 == randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Draw"
} else {
    document.querySelector(".container h1").innerHTML = "Refresh Me"
}