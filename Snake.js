
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.draw = function () {
        context.fillStyle = "#27ff09";
        context.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.changeDirection = function (direction) {
        switch(direction) {
            case 'ArrowUp':
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                break;
            case 'ArrowDown':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'ArrowRight':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
            case 'ArrowLeft':
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                break;
        }
    }
}
