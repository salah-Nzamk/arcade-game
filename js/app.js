class Enemy {
    constructor(x,y) {
        // letiables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.dt = 0;
        this.x = x;
        this.y = y;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        
        if (this.x < ctx.canvas.width) {
            this.x += (150 * dt);
        }
        else {
            this.x = -90;
        }
        
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(playerImage){
        this.playerImage  = playerImage;
    }
    update(){

    }
    render(){

    }
    handleInput(){

    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a letiable called player

let enemy1 = new Enemy(-90, 60);
let enemy2 = new Enemy(-190, 140);
let enemy3 = new Enemy(-290, 230);
let enemy4 = new Enemy(-390, 140);
let enemy5 = new Enemy(-490, 60);
let enemy6 = new Enemy(-890, 230);
let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6];
let player = new Player('images/char-boy.png');

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
