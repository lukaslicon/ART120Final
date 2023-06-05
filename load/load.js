class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        //global images
        this.load.path = 'assets/images/';
        this.load.image("background", "map.png");
        this.load.image("introScreen", "introScreen.png");
        this.load.spritesheet('OutroGif', 'spritesheet.png', { frameWidth: 1920, frameHeight: 1082 });

        //npcScreen
        
        this.load.image('player', 'npcScreen/PixelArtCharacter.png');
        this.load.image('NPC', 'npcScreen/PixelArtNPC.png');

        //game1
        this.load.image('app', 'game1/HousingApp.png');
        this.load.image('boundary', 'game1/boundary.png');
        this.load.image('sideBoundary', 'game1/sideBoundary.png');
        this.load.image("timerBar", "game1/timerBar.png");
        this.load.image("timerBarBackground", "game1/backgroundbar.png");
        this.load.image("boarder", "game1/boarder.png");
        this.load.image("side", "game1/sideBoarder.png");
        this.load.image("reset", "game1/reset.png");

        //game2
    }
    create()
    {
        this.scene.start('outro');
    }
}

    let gameOptions = {
        initialTime: 60
    }

housing = 0;
progress = 0;
NPCmessage = 0;
game1score = 0;