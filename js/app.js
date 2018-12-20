// Enemies our hero must avoid
var Enemy = function(x,y) {
    this.x = x; // x pos
    this.y = y + 55; // y pos
    this.sprite = ('images/enemy-bug.png'); // The image/sprite for our enemies, this uses
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {


    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.boundary) { // If enemy is not passed boundary
    // Move forward
        this.x += 200 * dt; // Increment x by speed * dt
    }
    else {
        this.x = this.resetPos; // Reset pos to start
    }
};
  
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class - This class requires an update(), render() and a handleInput() method.


// Hero class
class Hero {
    constructor() {
        this.sprite = 'images/char-princess-girl.png'; // Sprite image
        this.step = 101; // one block in x axis
        this.jump = 83; // one block in y axis
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) - 20;
        this.x = this.startX; // x coord
        this.y = this.startY; // y coord
    }

    render() {
        // Draw Hero sprite on current x and y coord
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Update hero's x and y coords according to input
    // @param {string} input - Direction of travel
    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                } 
                break;
            case 'up':
                if (this.y > this.jump) {
                    this.y -= this.jump;
                }
                break;
            case 'right':
                if (this.x < this.step * 4) {
                    this.x += this.step;
                }
                break;
            case 'down':
                if (this.y < this.jump * 4) {
                    this.y += this.jump;
                } 
                break;
        }
    }
}

    // Methods
        // Update position
            // Check for colision
                // Did hero x and Y collide with enemy?
            // Check win?
                // Did Hero x and Y reach final tiles?
        // Handle keyboard input
            // Update hero's x and y coords according to input
        // Reset Hero
            // set x and y coords to starting x and y


// New hero object
const player = new Hero();
const bug1 = new Enemy(-101,0);
const bug2 = new Enemy(-101,83);
const bug3 = new Enemy((-101*2.5),83);
const allEnemies = []; // Init all enemy arrays
allEnemies.push(bug1,bug2,bug3); // For each enemy create and push a new enemy into the above array


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
