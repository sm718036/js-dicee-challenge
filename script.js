function diceGame() {
    let randomNumber1 = (Math.floor(Math.random() * 6)+1);
    let randomNumber2 = (Math.floor(Math.random() * 6)+1);

    let randomImage1 = "dice" + randomNumber1 + ".png";
    let randomImage2 = "dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", "images/" + randomImage1);
    document.querySelectorAll("img")[1].setAttribute("src", "images/" + randomImage2);

    if(randomImage1 > randomImage2) {
        document.querySelector("h1").textContent = "Player 1 Won!!!!";
        } else if(randomImage1 < randomImage2) {
        document.querySelector("h1").textContent = "Player 2 Won!!!!";
        } else {
        document.querySelector("h1").textContent = "Play Again";
    }
}