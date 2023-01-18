let game = document.getElementById("game");
let paddleLeft = document.getElementById("paddle-left");
let paddleRight = document.getElementById("paddle-right");
let ball = document.getElementById("ball");

let ballX = game.clientWidth / 2 - ball.clientWidth / 2;
let ballY = game.clientHeight / 2 - ball.clientHeight / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

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
