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
        
        this.load.image('player', 'npcScreen/PixelArtCharacter.png');
        this.load.image('NPC', 'npcScreen/PixelArtNPC.png');

        //game1

        this.load.image('summaryScreen', 'game1/summaryscreen.png');
        this.load.image('bob', 'game1/bob.png');
        this.load.image('boundary', 'game1/boundary.png');
        this.load.image('sideBoundary', 'game1/sideBoundary.png');
        this.load.image("timerBar", "game1/timerBar.png");
        this.load.image("timerBarBackground", "game1/backgroundbar.png");
        this.load.image("boarder", "game1/boarder.png");
        this.load.image("side", "game1/sideBoarder.png");
        this.load.image("reset", "game1/reset.png");

    }
    create()
    {
        this.scene.start('intro');
    }
}

    let gameOptions = {
        initialTime: 60
    }

    let housing = 0;
    let progress = 0;