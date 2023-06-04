class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        //global images
        this.load.path = 'assets/images/';
        this.load.image("background", "map.png");

        //npcScreen
        this.load.path = 'assets/images/npcScreen';
        this.load.image('player', 'PixelArtCharacter.png');
        this.load.image('NPC', 'PixelArtNPC.png');

        //game1
        this.load.path = 'assets/images/game1';
        this.load.image('summaryScreen', 'summaryscreen.png');
        this.load.image('bob', 'bob.png');
        this.load.image('boundary', 'boundary.png');
        this.load.image('sideBoundary', 'sideBoundary.png');
        this.load.image("timerBar", "timerBar.png");
        this.load.image("timerBarBackground", "backgroundbar.png");
        this.load.image("boarder", "boarder.png");
        this.load.image("side", "sideBoarder.png");
        this.load.image("reset", "reset.png");

    }
    create()
    {
        this.scene.start('intro');
    }
}

let gameOptions = {
    initialTime: 60
}