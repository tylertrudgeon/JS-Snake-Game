
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;

    this.draw = function () {
        context.fillStyle = "#27ff09";
        context.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width) {
            this.x = 0;
        }

        if(this.x < 0) {
            this.x = canvas.width;
        }

        if(this.y > canvas.height) {
            this.y = 0;
        }

        if(this.y < 0) {
            this.y = canvas.height;
        }
    }

    //Switch case for changeDirection function.
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
