let game = document.getElementById("game");
let paddleLeft = document.getElementById("paddle-left");
let paddleRight = document.getElementById("paddle-right");
let ball = document.getElementById("ball");

let ballX = game.clientWidth / 2 - ball.clientWidth / 2;
let ballY = game.clientHeight / 2 - ball.clientHeight / 2;
let ballSpeedX = 4;
let ballSpeedY = 4;

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
