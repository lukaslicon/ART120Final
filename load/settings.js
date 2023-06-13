class settings extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        this.titleMusic = this.sound.add("titleMusic");
        this.titleMusic.loop = true;


    }
    //fullscreen
    fullScreenButton(){
        this.add.image(this.game.config.width/1.03, this.game.config.height/30, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }

    //mute music
    muteBGM(){
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(.25);
        this.musicButton = this.add.sprite(this.game.config.width/1.03, this.game.config.height/10, 'music', 0)
        .setScale(3)
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if (musicMute == false) {
                //mute BGM
                musicMute = true;
                this.backMusic.setMute(true);

                //change animation frame to frame 1 (muted)
                this.musicButton.setFrame(1);
            } else {
                //unmute BGM
                musicMute = false;
                this.backMusic.setMute(false);

                //change animation frame to frame 0 (unmuted)
                this.musicButton.setFrame(0);
            }
        });
    }


}
