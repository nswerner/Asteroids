// Function.prototype.inherits = function (Parent) {
//     function Surrogate() {}
//     Surrogate.prototype = Parent.prototype;
//     this.prototype = new Surrogate();
//     this.prototype.constructor = this;
// };

Function.prototype.inherits = function (Parent) {
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
};

function MovingObject(name) { 
    this.name = name;
}

MovingObject.prototype.flyBy = function () {
    console.log(`${this.name}`);
};

function Ship(name) {
    MovingObject.call(this, name);
}
Ship.inherits(MovingObject);

function Asteroid(name) { 
    MovingObject.call(this, name);
}
Asteroid.inherits(MovingObject);

Asteroid.prototype.impact = function () {
    console.log(`${this.name} crashes violently`);
};

ship = new Ship("Falcon");
asteroid = new Asteroid("AX-236");
moving = new MovingObject("moving");
ship.flyBy();
asteroid.flyBy();
asteroid.impact();
// ship.impact();
// moving.impact();
console.log(asteroid.prototype instanceof MovingObject);