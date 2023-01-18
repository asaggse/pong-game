let game = document.getElementById("game");
let paddleLeft = document.getElementById("paddle-left");
let paddleRight = document.getElementById("paddle-right");
let ball = document.getElementById("ball");

// let player1ScoreDisplay = document.getElementById("player1-score");
// let player2ScoreDisplay = document.getElementById("player2-score");

let ballX = game.clientWidth / 2 - ball.clientWidth / 2;
let ballY = game.clientHeight / 2 - ball.clientHeight / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

// let player1Score = 0;
// let player2Score = 0;

document.addEventListener("keydown", event => {
    if (event.code === "KeyW") {
        paddleLeft.style.top = paddleLeft.offsetTop - 20 + "px";
    }
    if (event.code === "KeyS") {
        paddleLeft.style.top = paddleLeft.offsetTop + 20 + "px";
    }
    if (event.code === "ArrowUp") {
        paddleRight.style.top = paddleRight.offsetTop - 20 + "px";
    }
    if (event.code === "ArrowDown") {
        paddleRight.style.top = paddleRight.offsetTop + 20 + "px";
    }
});

game.addEventListener("mousemove", event => {
    let gameRect = game.getBoundingClientRect();
    let paddleLeftY = event.clientY - gameRect.top - paddleLeft.clientHeight / 2;
    paddleLeft.style.top = paddleLeftY + "px";
});


function animate() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX + ball.clientWidth >= game.clientWidth) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + ball.clientHeight >= game.clientHeight) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
}

animate();

// function scorePoint(player) {
//     if (player === 1) {
//         player1Score++;
//     } else {
//         player2Score++;
//     }
//     updateScore();
// }

// function checkForScore() {
//     if (ball.x <= 0) {
//         player2Score++;
//         updateScore();
//     }
//     if (ball.x >= gameWidth) {
//         player1Score++;
//         updateScore();
//     }
// }

// function updateScore() {
//     player1ScoreDisplay.innerHTML = player1Score;
//     player2ScoreDisplay.innerHTML = player2Score;
// }
