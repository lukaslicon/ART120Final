class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/images/';
        this.load.image('background', 'map.png');
        this.load.image('player', 'PixelArtCharacter.png');
        this.load.image('NPC', 'PixelArtNPC.png');

    }
    create()
    {
        this.scene.start('intro');
    }
}

let gameOptions = {
    initialTime: 60
}