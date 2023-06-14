housing = false;
progress = 0;
NPCmessage = 0;

game1score = 0;
game1win = false;

game2score = 0;
game2win = false;

game3score = 0;
game3win = false;

musicMute = false;
muteButtonFrame = 0;

pointerDestroyed = false;
game1pointer = false
game2pointer = false;
game3pointer = false;

class Load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        //font
        this.load.text('pmd', 'font.css');
        
        //shaders
        this.load.glsl('bundle', 'assets/shaders/bundle.glsl.js');
        this.load.image('portal', 'assets/images/portal.png');
        
        //global images
        this.load.path = 'assets/images/';
        this.load.image('fullscreen', 'fullscreen.png');
        this.load.image("background", "map.png");
        this.load.image("introScreen", "preTitleScreen.png");
        this.load.image("titleScreen", "TitleScreen.png");
        this.load.image('play', 'play.png');
        this.load.image('pointer', 'pointer.png');
        this.load.audio('BGM', 'music/BGM.mp3');
        this.load.audio('titleMusic', 'music/titleMusic.mp3');
        this.load.spritesheet('music', 'music.png', { frameWidth: 32, frameHeight: 32 });

        //advanced visual asset (outro vid)
        this.load.video('outroVid', 'outro.mp4', { loop: false, mute: true });
        
        //logos
        this.load.image('JLogo', 'logos/JEMStudios.png');
        this.load.image('LLogo', 'logos/buggyGames.png');
        this.load.image('MLogo', 'logos/MLogo.png');

        //npcScreen
        this.load.image('player', 'npcScreen/mainCharacter.png');
        this.load.image('NPC', 'npcScreen/npc.png');

        //game1
        this.load.image('app', 'game1/HousingApp.png');
        this.load.image("timerBar", "game1/timerBar.png");
        this.load.image("timerBarBackground", "game1/backgroundbar.png");
        this.load.image("boarder", "game1/boarder.png");
        this.load.image("game1bg", "game1/game1bg.png");
        this.load.image("side", "game1/sideBoarder.png");
        this.load.image("reset", "game1/reset.png");
        this.load.image("topHouse", "game1/topHouse.png");
        this.load.image("bottomHouse", "game1/bottomHouse.png");
        this.load.image("leftHouse", "game1/leftHouse.png");
        this.load.image("rightHouse", "game1/rightHouse.png");

        //game2
        this.load.image('coin', 'game2/slug.png');
        this.load.image('bg','game2/background.png');
        this.load.image('sh1','game2/shfull.png');
        this.load.image('sh2','game2/sh2.png');
        this.load.image('sh3','game2/sh3.png');
        this.load.image('sh4','game2/shno.png');
        this.load.image('coinb','game2/badslug.png');
        this.load.audio('dmg','game2/damage.wav');
        this.load.audio('catch','game2/catch.wav');

        //game3
        this.load.image('turbo', 'game3/gLOVE.png');
        this.load.image('bg1','game3/background1.png');
        this.load.image('obs','game3/KoiDown.png');
        this.load.image('obs2','game3/KoiUp.png');
        this.load.image('obs3','game3/KoiUpR.png');
        this.load.image('waste','game3/waste.png');
        this.load.audio('dmg','game3/damage.wav');
        this.load.audio('catch','game3/catch.wav');
        this.load.image('sh1','game3/shfull.png')
        this.load.image('sh2','game3/sh2.png')
        this.load.image('sh3','game3/sh3.png')
        this.load.image('sh4','game3/shno.png')
    }
    create()
    {
        this.scene.start('intro');
    }
}
    let gameOptions = {
        initialTime: 60
    }

