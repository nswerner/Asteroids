function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
    [x, y] = this.pos;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
};

MovingObject.prototype.move = function() {
    [x, y] = this.pos;
    [dx, dy] = this.vel;
    x = x + dx;
    y = y + dy;
    this.pos = [x, y];
};




module.exports = MovingObject;