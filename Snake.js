
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail =[];

    this.draw = function () {
        context.fillStyle = "#27ff09";

        //Draws each rectangle of snake tail.
        for (let i = 0; i < this.tail.length; i++) {
            context.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        //Draws current position.
        context.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function () {
        for(let i = 0; i < this.tail.length -1; i++){
            this.tail[i] = this.tail[i + 1];
        }

        //Adds a piece to the tail after the loop.
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        //Puts snake in motion and updates coords.
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //If statements to allow snake to move through the 'walls'.
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

    this.eat = function () {
        if(this.x === apple.x && this.y === apple.y){
            this.total++;
            return true;
        }
        return false;
    }

}
