function Apple() {
    this.x;
    this.y;

    this.appleLocation = function () {
        this.x = (Math.floor(Math.random() * rows -1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns -1) + 1) * scale;
    }

    this.draw = function () {
        context.fillStyle = "#ff1103";
        context.fillRect(this.x, this.y, scale, scale);
    }
}