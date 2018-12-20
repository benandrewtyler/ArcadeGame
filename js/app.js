// Enemies our hero must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x pos
    // y pos

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed boundary
        // Move forward
        // Increment x by speed * dt
    // else 
        // Reset pos to start
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
                this.x -= this.step;
                break;
            case 'up':
                this.y -= this.jump;
                break;
            case 'right':
                this.x += this.step;
                break;
            case 'down':
                this.y += this.jump;
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

// Init all enemy arrays
// For each enemy create and push a new enemy into the above array

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
