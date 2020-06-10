//Targeting canvas by it's ID.
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Setting canvas to have squares.
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

//Creating IIFE to set up the snake.
(function setup() {
    snake = new Snake();
    snake.draw();

    window.setInterval(() => {
        context.clearRect(0,0, canvas.height, canvas.width);
        snake.update();
        snake.draw();
    }, 150);
}());

window.addEventListener('keydown', ((e) => {
    const direction = e.key;
    snake.changeDirection(direction);
}));