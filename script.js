    let randomNumber;
    let wrongGuessCount=0;

    resetGame
    function resetGame() {
    randomNumber = parseInt(Math.random() * 100);
     wrongGuessCount = 0;
    }
    resetGame();
    function guessTheNumber() {
    let userInput = parseInt(document.querySelector("input").value);

    if(userInput < randomNumber) {
        alert("Too Small");
        wrongGuessCount++;
    }
    else if(userInput > randomNumber) {
        alert("Too Big");
        wrongGuessCount++;
    }
    else if(userInput== randomNumber){
        alert("Congratulations wrong guessses:" + wrongGuessCount);
        resetGame();
    }
    }
