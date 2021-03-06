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
    apple = new Apple();

    apple.appleLocation();

    window.setInterval(() => {
        context.clearRect(0,0, canvas.height, canvas.width);
        snake.update();
        apple.draw();
        snake.draw();

        if(snake.eat(Apple)) {
            apple.appleLocation();
        }
    }, 150);
}());

//Listening for keystrokes to determine snake direction.
window.addEventListener('keydown', ((e) => {
    const direction = e.key;
    snake.changeDirection(direction);
}));