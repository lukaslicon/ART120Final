'use strict';

// Phaser game configuration
let config = {
    type: Phaser.AUTO,
    pixelArt: true,
    zoom: 1,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: false,
            debugShowVelocity: false
        }
    },
    scene: [load, intro, title, npcScreen, MiniGame1, MiniGame2, MiniGame3, Fail, Fail2, outro, UI, Homeless],
    title: "Mini Game Prototype",
    scaleMode: Phaser.Scale.ScaleModes.RESIZE,
    autoRound: true,
    orientation: 'auto'
};

var game = new Phaser.Game(config);

// Event listener for orientation change
game.scene.scenes.forEach(function (scene) {
    scene.scale.on('orientationchange', function (orientation) {
        if (orientation === Phaser.Scale.PORTRAIT) {
            // Code to handle portrait orientation
        } else if (orientation === Phaser.Scale.LANDSCAPE) {
            // Code to handle landscape orientation
        }
    });
});

// Function to handle fullscreen mode
function enableFullscreen() {
    if (game.scale.isFullscreen) {
        game.scale.stopFullscreen();
    } else {
        game.scale.startFullscreen();
    }
}
