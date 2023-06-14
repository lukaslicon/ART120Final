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
            debug: false,
            debugShowVelocity: false
        }
    },
    scene: [Load, Intro, Title, TextIntro, npcScreen, MiniGame1, MiniGame2, MiniGame3, outro, UI],
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
            scene.scale.resize(window.innerWidth, window.innerHeight);
        } else if (orientation === Phaser.Scale.LANDSCAPE) {
            scene.scale.resize(window.innerWidth, window.innerHeight);
        }
    });
});