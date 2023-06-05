
let config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false,
            debugShowVelocity: false
    }
},
scene: [load, intro, title, npcScreen, MiniGame1, MiniGame2, MiniGame3, Fail, Fail2, outro, UI, Homeless],
title: "Mini Game Prototype",
};

let game = new Phaser.Game(config);
