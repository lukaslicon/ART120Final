
let config = {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true,
            debugShowVelocity: false
    }
},
scene: [load, intro, npcScreen, MiniGame1, outro],
title: "Mini Game Prototype",
};

let game = new Phaser.Game(config);
